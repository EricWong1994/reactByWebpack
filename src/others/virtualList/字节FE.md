> 改造完成后我们可以观察到整个Modal的打开比之前变得流畅了不少，可以做到立即响应用户的点击事件唤起/关闭Modal

性能对比Demo: **[codesandbox.io/s/a-v-list-…](https://link.zhihu.com/?target=https%3A//codesandbox.io/s/a-v-list-has-dynamic-inner-height-modal-demo-l66py)**

## **0x0 基础知识**

所以什么是虚拟滚动/列表呢？

> 一个虚拟列表是指当我们有成千上万条数据需要进行展示但是用户的“视窗”（一次性可见内容）又不大时我们可以通过巧妙的方法只渲染用户最大可见条数+“BufferSize”个元素并在用户进行滚动时动态更新每个元素中的内容从而达到一个和长list滚动一样的效果但花费非常少的资源。

![img](https://pic3.zhimg.com/80/v2-d7c3cc7d26a3d61e3a6c21aafaac5306_720w.webp)

从上图中我们可以发现实际用户每次能看到的元素/内容只有item-4 ~ item-13 也就是9个元素

## **0x1 实现一个“定高”虚拟列表**

- 首先我们需要定义几个变量/名称。

- - 从上图中我们可以看出来用户实际可见区域的开始元素是Item-4，所以他在数据数组中对应的下标也就是我们的`startIndex`
  - 同理Item-13对应的数组下标则应该是我们的`endIndex`
  - 所以Item-1，Item-2和Item-3则是被用户的向上滑动操作所隐藏，所以我们称它为`startOffset(scrollTop)`

因为我们只对可视区域的内容做了渲染，所以为了保持整个容器的行为和一个长列表相似（滚动）我们必须保持原列表的高度，所以我们将HTML结构设计成如下

```js
<!--ver 1.0 -->
<div className="vListContainer">
  <div className="phantomContent">
    ...
    <!-- item-1 -->
    <!-- item-2 -->
    <!-- item-3 -->
    ....
  </div>
</div>
```

- 其中：

- - `vListContainer` 为可视区域的容器，具有 `overflow-y: auto` 属性。
  - 在 `phantom` 中的每条数据都应该具有 `position: absolute` 属性
  - `phantomContent` 则是我们的“幻影”部分，其主要目的是为了还原真实List的内容高度从而模拟正常长列表滚动的行为。

- 接着我们对 `vListContainer` 绑定一个`onScroll`的响应函数，并在函数中根据原生滚动事件的scrollTop 属性来计算我们的 `startIndex` 和 `endIndex`

- - 在开始计算之前，我们先要定义几个数值：

  - - 我们需要一个固定的列表元素高度：`rowHeight`
    - 我们需要知道当前list一共有多少条数据: `total`
    - 我们需要知道当前用户可视区域的高度: `height`

  - 在有了上述数据之后我们可以通过计算得出下列数据：

  - - 列表总高度: `phantomHeight = total * rowHeight`
    - 可视范围内展示元素数：`limit = Math.ceil(height/rowHeight)`

（注意此处我们用的是向上取整）

- 所以我们可以在onScroll 回调中进行下列计算：

```js
onScroll(evt: any) {
  // 判断是否是我们需要响应的滚动事件
  if (evt.target === this.scrollingContainer.current) {
    const { scrollTop } = evt.target;
    const { startIndex, total, rowHeight, limit } = this;

    // 计算当前startIndex
    const currentStartIndex = Math.floor(scrollTop / rowHeight);

    // 如果currentStartIndex 和 startIndex 不同（我们需要更新数据了）
    if (currentStartIndex !== startIndex ) {
      this.startIndex = currentStartIndex;
      this.endIndex = Math.min(currentStartIndedx + limit, total - 1);
      this.setState({ scrollTop });
    }
  }
}
```

- 当我们一旦有了startIndex 和 endIndex 我们就可以渲染其对应的数据：

```js
renderDisplayContent = () => {
  const { rowHeight, startIndex, endIndex } = this;
  const content = [];
  
  // 注意这块我们用了 <= 是为了渲染x+1个元素用来在让滚动变得连续（永远渲染在判断&渲染x+2）
  for (let i = startIndex; i <= endIndex; ++i) {
    // rowRenderer 是用户定义的列表元素渲染方法，需要接收一个 index i 和
    //    当前位置对应的style
    content.push(
      rowRenderer({
        index: i, 
        style: {
          width: '100%',
          height: rowHeight + 'px',
          position: "absolute",
          left: 0,
          right: 0,
          top: i * rowHeight,
          borderBottom: "1px solid #000",
        }
      })
    );
  }
  
  return content;
};
```

> 线上 Demo：[https://codesandbox.io/s/a-naive-v-list-f0ghm](https://link.zhihu.com/?target=http%3A//codesandbox.io/s/a-naive-v%E2%80%A6)

### **原理：**

- 所以这个滚动效果究竟是怎么实现的呢？首先我们在vListContainer中渲染了一个真实list高度的“幻影”容器从而允许用户进行滚动操作。其次我们监听了onScroll事件，并且在每次用户触发滚动是动态计算当前滚动Offset（被滚上去隐藏了多少）所对应的开始下标（index）是多少。当我们发现新的下边和我们当前展示的下标不同时进行赋值并且setState触发重绘。当用户当前的滚动offset未触发下标更新时，则因为本身phantom的长度关系让虚拟列表拥有和普通列表一样的滚动能力。当触发重绘时因为我们计算的是startIndex 所以用户感知不到页面的重绘（因为当前滚动的下一帧和我们重绘完的内容是一致的）。

### **优化：**

- 对于上边我们实现的虚拟列表，大家不难发现一但进行了快速滑动就会出现列表闪烁的现象/来不及渲染、空白的现象。还记得我们一开始说的 ***渲染用户最大可见条数+“BufferSize”* 么？对于我们渲染的实际内容，我们可以对其上下加入Buffer的概念（即上下多渲染一些元素用来过渡快速滑动时来不及渲染的问题）。优化后的onScroll 函数如下：

```js
onScroll(evt: any) {
  ........
  // 计算当前startIndex
  const currentStartIndex = Math.floor(scrollTop / rowHeight);
    
  // 如果currentStartIndex 和 startIndex 不同（我们需要更新数据了）
  if (currentStartIndex !== originStartIdx) {
    // 注意，此处我们引入了一个新的变量叫originStartIdx，起到了和之前startIndex
    //    相同的效果，记录当前的 真实 开始下标。
    this.originStartIdx = currentStartIndex;
    // 对 startIndex 进行 头部 缓冲区 计算
    this.startIndex = Math.max(this.originStartIdx - bufferSize, 0);
    // 对 endIndex 进行 尾部 缓冲区 计算
    this.endIndex = Math.min(
      this.originStartIdx + this.limit + bufferSize,
      total - 1
    );

    this.setState({ scrollTop: scrollTop });
  }
}
```

> 线上Demo：[https://codesandbox.io/s/A-better-v-list-bkw1t](https://link.zhihu.com/?target=http%3A//codesandbox.io/s/A-better-%E2%80%A6)

## **0x2 列表元素高度自适应**

> 现在我们已经实现了“定高”元素的虚拟列表的实现，那么如果说碰到了高度不固定的超长列表的业务场景呢？

- 一般碰到不定高列表元素时有三种虚拟列表实现方式：

1. 对输入数据进行更改，传入每一个元素对应的高度 dynamicHeight[i] = x x 为元素i 的行高
   需要实现知道每一个元素的高度（不切实际）
2. 将当前元素先在屏外进行绘制并对齐高度进行测量后再将其渲染到用户可视区域内
   这种方法相当于双倍渲染消耗（不切实际）
3. 传入一个estimateHeight 属性先对行高进行估计并渲染，然后渲染完成后获得真实行高并进行更新和缓存
   会引入多余的transform（可以接受），会在后边讲为什么需要多余的transform...

- 让我们暂时先回到 HTML 部分

```html
<!--ver 1.0 -->
<div className="vListContainer">
  <div className="phantomContent">
    ...
    <!-- item-1 -->
    <!-- item-2 -->
    <!-- item-3 -->
    ....
  </div>
</div>
<!--ver 1.1 -->
<div className="vListContainer">
  <div className="phantomContent" />
  <div className="actualContent">
    ...
    <!-- item-1 -->
    <!-- item-2 -->
    <!-- item-3 -->
    ....
  </div>
</div>
```

- 在我们实现 “定高” 虚拟列表时，我们是采用了把元素渲染在`phantomContent` 容器里，并且通过设置每一个item的`position` 为 `absolute` 加上定义`top` 属性等于 `i * rowHeight` 来实现无论怎么滚动，渲染内容始终是在用户的可视范围内的。在列表高度不能确定的情况下，我们就无法准确的通过`estimateHeight` 来计算出当前元素所处的y位置，所以我们需要一个容器来帮我们做这个绝对定位。

- actualContent 则是我们新引入的列表内容渲染容器，通过在此容器上设置`position: absolute` 属性来避免在每个item上设置。

- - 有一点不同的是，因为我们改用actualContent 容器。当我们进行滑动时需要动态的对容器的位置进行一个 **y-transform** 从而实现容器永远处于用户的视窗之中：

```js
getTransform() {
  const { scrollTop } = this.state;
  const { rowHeight, bufferSize, originStartIdx } = this;
  // 当前滑动offset - 当前被截断的（没有完全消失的元素）距离 - 头部缓冲区距离
  return `translate3d(0,${
    scrollTop -
    (scrollTop % rowHeight) -
    Math.min(originStartIdx, bufferSize) * rowHeight
  }px,0)`;
}
```

> 线上Demo：[https://codesandbox.io/s/a-v-list-achieved-by-transform-container-29mbc](https://link.zhihu.com/?target=http%3A//codesandbox.io/s/a-v-list-%E2%80%A6)
> (注：当没有高度自适应要求时且没有实现cell复用时，把元素通过absolute渲染在phantom里会比通过transform的性能要好一些。因为每次渲染content时都会进行重排，但是如果使用transform时就相当于进行了( 重排 + transform) > 重排）

- 回到列表元素高度自适应这个问题上来，现在我们有了一个可以在内部进行正常block排布的元素渲染容器（actualContent ），我们现在就可以直接在不给定高度的情况下先把内容都渲染进去。对于之前我们需要用rowHeight 做高度计算的地方，我们统一替换成estimateHeight 进行计算。

- - `limit = Math.ceil(height / estimateHeight)`
  - `phantomHeight = total * estimateHeight`
  - 同时为了避免重复计算每一个元素渲染后的高度(getBoundingClientReact().height) 我们需要一个数组来存储这些高度

```js
interface CachedPosition {
  index: number;         // 当前pos对应的元素的下标
  top: number;           // 顶部位置
  bottom: number;        // 底部位置
  height: number;        // 元素高度
  dValue: number;        // 高度是否和之前(estimate)存在不同
}
cachedPositions: CachedPosition[] = [];
// 初始化cachedPositions
initCachedPositions = () => {
  const { estimatedRowHeight } = this;
  this.cachedPositions = [];
  for (let i = 0; i < this.total; ++i) {
    this.cachedPositions[i] = {
      index: i,
      height: estimatedRowHeight,             // 先使用estimateHeight估计
      top: i * estimatedRowHeight,            // 同上
      bottom: (i + 1) * estimatedRowHeight,   // same above
      dValue: 0,
    };
  }
};
```

当我们计算完(初始化完) cachedPositions 之后由于我们计算了每一个元素的top和bottom，所以phantom 的高度就是cachedPositions 中最后一个元素的bottom值

```js
this.phantomHeight = this.cachedPositions[cachedPositionsLen - 1].bottom;
```

当我们根据estimateHeight 渲染完用户视窗内的元素后，我们需要对渲染出来的元素做实际高度更新，此时我们可以利用componentDidUpdate 生命周期钩子来计算、判断和更新：

```js
componentDidUpdate() {
  ......
  // actualContentRef必须存在current （已经渲染出来） + total 必须 > 0
  if (this.actualContentRef.current && this.total > 0) {
    this.updateCachedPositions();
  }
}

updateCachedPositions = () => {
  // update cached item height
  const nodes: NodeListOf<any> = this.actualContentRef.current.childNodes;
  const start = nodes[0];

  // calculate height diff for each visible node...
  nodes.forEach((node: HTMLDivElement) => {
    if (!node) {
      // scroll too fast?...
      return;
    }
    const rect = node.getBoundingClientRect();
    const { height } = rect;
    const index = Number(node.id.split('-')[1]);
    const oldHeight = this.cachedPositions[index].height;
    const dValue = oldHeight - height;

    if (dValue) {
      this.cachedPositions[index].bottom -= dValue;
      this.cachedPositions[index].height = height;
      this.cachedPositions[index].dValue = dValue;
    }
  });

  // perform one time height update...
  let startIdx = 0;
  
  if (start) {
    startIdx = Number(start.id.split('-')[1]);
  }
  
  const cachedPositionsLen = this.cachedPositions.length;
  let cumulativeDiffHeight = this.cachedPositions[startIdx].dValue;
  this.cachedPositions[startIdx].dValue = 0;

  for (let i = startIdx + 1; i < cachedPositionsLen; ++i) {
    const item = this.cachedPositions[i];
    // update height
    this.cachedPositions[i].top = this.cachedPositions[i - 1].bottom;
    this.cachedPositions[i].bottom = this.cachedPositions[i].bottom - cumulativeDiffHeight;

    if (item.dValue !== 0) {
      cumulativeDiffHeight += item.dValue;
      item.dValue = 0;
    }
  }

  // update our phantom div height
  const height = this.cachedPositions[cachedPositionsLen - 1].bottom;
  this.phantomHeight = height;
  this.phantomContentRef.current.style.height = `${height}px`;
};
```

当我们现在有了所有元素的准确高度和位置值时，我们获取当前scrollTop (Offset)所对应的开始元素的方法修改为通过 cachedPositions 获取：

> 因为我们的cachedPositions 是一个有序数组，所以我们在搜索时可以利用二分查找来降低时间复杂度

```js
getStartIndex = (scrollTop = 0) => {
  let idx = binarySearch<CachedPosition, number>(this.cachedPositions, scrollTop, 
    (currentValue: CachedPosition, targetValue: number) => {
      const currentCompareValue = currentValue.bottom;
      if (currentCompareValue === targetValue) {
        return CompareResult.eq;
      }

      if (currentCompareValue < targetValue) {
        return CompareResult.lt;
      }

      return CompareResult.gt;
    }
  );

  const targetItem = this.cachedPositions[idx];

  // Incase of binarySearch give us a not visible data(an idx of current visible - 1)...
  if (targetItem.bottom < scrollTop) {
    idx += 1;
  }

  return idx;
};

onScroll = (evt: any) => {
  if (evt.target === this.scrollingContainer.current) {
    ....
    const currentStartIndex = this.getStartIndex(scrollTop);
    ....
  }
};
```

二分查找实现：

```js
export enum CompareResult {
  eq = 1,
  lt,
  gt,
}
export function binarySearch<T, VT>(list: T[], value: VT, compareFunc: (current: T, value: VT) => CompareResult) {
  let start = 0;
  let end = list.length - 1;
  let tempIndex = null;

  while (start <= end) {
    tempIndex = Math.floor((start + end) / 2);
    const midValue = list[tempIndex];
    const compareRes: CompareResult = compareFunc(midValue, value);

    if (compareRes === CompareResult.eq) {
      return tempIndex;
    }
    
    if (compareRes === CompareResult.lt) {
      start = tempIndex + 1;
    } else if (compareRes === CompareResult.gt) {
      end = tempIndex - 1;
    }
  }
  return tempIndex;
}
```

最后，我们滚动后获取transform的方法改造成如下:

```js
getTransform = () =>
    `translate3d(0,${this.startIndex >= 1 ? this.cachedPositions[this.startIndex - 1].bottom : 0}px,0)`;
s.startIndex >= 1 ? this.cachedPositions[this.startIndex - 1].bottom : 0}px,0)`;
```

