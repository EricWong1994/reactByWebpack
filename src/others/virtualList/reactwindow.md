react-window官网
https://react-window.vercel.app/#/examples/list/fixed-size

[bvaughn/react-window: (github.com)](https://github.com/bvaughn/react-window#how-is-react-window-different-from-react-virtualized)



参考：
https://www.codeleading.com/article/83464600958/



## COMPONENTS

### [FlxedSizeList](https://react-window.vercel.app/#/api/FixedSizeList)

#### children: component

React component responsible for rendering the individual item specified by an `index` prop. This component also receives a `style` prop (used for positioning).

Function components are useful for rendering simple items:

```jsx
<FixedSizeList {...props}>
  {({ index, style }) => (
    <div style={style}>
      Item {index}
    </div>
  )}
</FixedSizeList>
```

useIsScrolling 

```jsx
const Row = ({ index, isScrolling, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    {isScrolling ? 'Scrolling' : `Row ${index}`}
  </div>
);
```

To render more 复杂的 items, PureComponent 避免重复渲染

```jsx
// Declare your item renderer outside of the render method:
class ItemRenderer extends PureComponent {
  render() {
    return (
      <div style={this.props.style}>
        Item {this.props.index}
      </div>
    );
  }
}
 
// Reference it inside of the render method:
<FixedSizeList {...props}>
  {ItemRenderer}
</FixedSizeList>
```

#### height

: number | string

列表容器高度

当高度

#### itemCount: number

子项总个数

如用户列表，则是所有用户的数量

#### itemSize: number

子项尺寸，

纵向的话，即每一项的高度

#### width

width: number | string

容器的宽度



#### 必传项👆🏻

#### **className**

#### **direction**

#### **initialScrollOffset**

Scroll offset for initial render.

For vertical lists, this affects `scrollTop`. For horizontal lists, this affects `scrollLeft`.

#### innerRef

innerRef: function | createRef object

Ref to attach to the inner container element. This is an advanced property.

#### innerElementType

innerElementType: React$ElementType = "div"

Tag name passed to `document.createElement` to create the inner container element. This is an advanced property; in most cases, the default ("div") should be used.

#### innerTagName

innerTagName: string

**This property has been deprecated.** Please use the `innerElementType` prop instead.

#### **itemData** 🇨🇳 

每一项的数据

```jsx
const Row = ({ data, index, style }) => {
  const user = data[index]
  return <div style={style}>
    <UserInfo user={user} />
  </div>
}

<List
  width={width}
  height={height}
  itemData={users}
  itemCount={users.length}
  itemSize={getRowHeight}
  ref={listRef}
  onItemsRendered={onItemsRendered}
>
  {Row}
</List>
```

类组件：

```jsx
class ComponentThatRendersAListOfItems extends PureComponent {
  render() {
    // Pass items array to the item renderer component as itemData:
    return (
      <FixedSizeList
        itemData={this.props.itemsArray}
        {...otherListProps}
      >
        {ItemRenderer}
      </FixedSizeList>
    );
  }
}
 
// The item renderer is declared outside of the list-rendering component.
// So it has no way to directly access the items array.
class ItemRenderer extends PureComponent {
  render() {
    // Access the items array using the "data" prop:
    const item = this.props.data[this.props.index];
 
    return (
      <div style={this.props.style}>
        {item.name}
      </div>
    );
  }
}
```

#### itemKey: function

没看太懂：FIXME

By default, lists will use an item's index as its [key](https://reactjs.org/docs/lists-and-keys.html#keys). This is okay if:

- Your collections of items is never sorted or modified
- Your item renderer is not stateful and does not extend `PureComponent`

If your list does not satisfy the above constraints, use the `itemKey` property to specify your own keys for items:

```
function itemKey(index, data) {
  // Find the item at the specified index.
  // In this case "data" is an Array that was passed to List as "itemData".
  const item = data[index];
 
  // Return a value that uniquely identifies this item.
  // Typically this will be a UID of some sort.
  return item.id;
}
```

#### layout

layout: string = "vertical"

Layout/orientation of the list. Acceptable values are:

- vertical (default) - Up/down scrolling.
- horizontal - Left/right scrolling.

Note that lists may scroll in both directions (depending on CSS) but content will only be windowed in the layout direction specifie



#### 方法👇🏻

#### onItemsRendered🇨🇳

: function

React-window是一个优化大量数据呈现的列表组件，它的入口是通过一个Viewport组件进行呈现。onItemsRendered方法是Viewport组件的一个回调函数，用于获取Viewport中显示的列表项的索引范围（startIndex、stopIndex），可以在这个回调函数中执行一些自定义逻辑，如记录用户滚动行为或者实现懒加载等。 

具体来说，当Viewport滚动或者更新时，onItemsRendered方法会被调用。该方法接收两个参数（一个是可见的起始项索引，一个是可见的结束项索引），可以用来记录用户当前的浏览位置。由于每次滚动事件发生时，onItemsRendered方法都会被调用，因此它还可以用于实现懒加载策略。



Called when the range of items rendered by the list changes.

This callback will only be called when item indices change. It will not be called if items are re-rendered for other reasons (e.g. a change in `isScrolling` or `data` params).

```jsx
function onItemsRendered({
  overscanStartIndex,
  overscanStopIndex,
  visibleStartIndex,
  visibleStopIndex
}) {
  // All index params are numbers.
}
```

overscanStopIndex 参数代表着在列表中渲染的最后一个元素的索引，它的作用是为了提高滚动性能。当用户滚动列表时，React-window 会根据 overscanStopIndex 预先渲染一些元素，以便在滚动时能够无缝地显示新的元素。这样可以避免滚动时出现闪烁或者卡顿的情况。同时，overscanStopIndex 参数也可以用来优化数据的加载，因为它可以指定哪些元素需要优先加载，从而提高数据加载的效率

如下例子中，第一次打印结果为 0、6、0、4

视图中展示了4条数据，

```jsx
function onItemsRendered({
  overscanStartIndex,
  overscanStopIndex,
  visibleStartIndex,
  visibleStopIndex
}) {
  console.log(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex)
  // All index params are numbers.
}

const Example = () => (
  <List
    className="List"
    height={150}
    itemCount={1000}
    itemSize={35}
    width={300}
    onItemsRendered={onItemsRendered}
  >
    {Row}
  </List>
);
```



#### onScroll

Called when the list scroll positions changes, as a result of user scrolling or scroll-to method calls.

```jsx
function onScroll({
  scrollDirection,
  scrollOffset,
  scrollUpdateWasRequested
}) {
  // scrollDirection is either "forward" or "backward".
 
  // scrollOffset is a number.
 
  // scrollUpdateWasRequested is a boolean.
  // This value is true if the scroll was caused by scrollTo() or scrollToItem(),
  // And false if it was the result of a user interaction in the browser.
}
```

#### outerRef

outerRef: function | createRef object

Ref to attach to the outer container element. This is an advanced property.

#### outerElementType

outerElementType: React$ElementType = "div"

Tag name passed to `document.createElement` to create the outer container element. This is an advanced property; in most cases, the default ("div") should be used.

#### outerTagName

outerTagName: string

**废弃属性.** 用 `outerElementType` 代替

#### overscanCount 缓冲🇨🇳

: number = 1

看来overscanCount默认值为2，官方文档写错了

```
0 6 0 4 
```

overscanCount={5}

```
0 9 0 4
```



The number of items (rows or columns) to render outside of the visible area. This property can be important for two reasons:

- Overscanning by one row or column allows the tab key to focus on the next (not yet visible) item.
- Overscanning slightly can reduce or prevent a flash of empty space when a user first starts scrolling.

Note that overscanning too much can negatively impact performance. By default, List overscans by one item.

#### style 🇨🇳

style: Object = null

Optional inline style to attach to outermost `<div>` element.

#### useIsScrolling

useIsScrolling: boolean = false

加了该属性后，Row能获取到是否正在滚动

```jsx
const Row = ({ index, isScrolling, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    {isScrolling ? 'Scrolling' : `Row ${index}`}
  </div>
);
```



#### scrollTo

scrollTo(scrollOffset: number): void

滚动指定的偏移量

#### scrollToItem

scrollToItem(index: number, align: string = "auto"): void

 滚动到指定索引



### [VariableSizelist](https://react-window.vercel.app/#/api/VariableSizeList)

#### PROPS

This component has the same props as [`FixedSizeList`](https://react-window.vercel.app/#/api/FixedSizeList#props), but with the following additions:

- estimatedItemSize: number = 50

  estimatedItemSize 参数用于指定列表项的平均尺寸。通过设置此参数，React Window 可以更快地计算列表的总高度，从而提高性能。 具体来说，当 React Window 首次渲染列表时，它无法立即知道列表中每个项的确切尺寸，因此需要进行一些估计。如果您知道列表项的平均尺寸，可以使用 estimatedItemSize 参数来提供这些信息，以便 React Window 可以更好地优化列表的渲染。 需要注意的是，estimatedItemSize 参数只是一个估计值，实际的列表项尺寸可能会有所不同。因此，如果您的列表项尺寸差异较大，建议不要设置 estimatedItemSize，而是使用其他优化技术来提高性能。

  （Estimated size of a item in the direction being windowed. For vertical lists, this is the row height. For horizontal lists, this is the column width.This value is used to calculated the estimated total size of a list before its items have all been measured. The total size impacts user scrolling behavior. It is updated whenever new items are measured.）

- itemSize: (index: number) => number 获取每一项尺寸（垂直滚动 ：高度）

  Returns the size of a item in the direction being windowed. For vertical lists, this is the row height. For horizontal lists, this is the column width.`function itemSize(index) {``  return index % 2 ? 50 : 25;``}`

#### METHODS

This component has the same methods as [`FixedSizeList`](https://react-window.vercel.app/#/api/FixedSizeList#methods), but with the following additions:

- resetAfterIndex(index: number, shouldForceUpdate: boolean = true): void

  `VariableSizeList` caches offsets and measurements for each index for performance purposes. This method clears that cached data for all items after (and including) the specified index. It should be called whenever a item's size changes. (Note that this is not a typical occurrance.)By default the list will automatically re-render after the index is reset. If you would like to delay this re-render until e.g. a state update has completed in the parent component, specify a value of`false`for the second, optional parameter.

  

### [FixedSizeGrid](https://react-window.vercel.app/#/api/FixedSizeGrid)

### [VariableSizeGrid](https://react-window.vercel.app/#/api/VariableSizeGrid)



## 示例

### 基础 FixedSizeList

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeList as List } from 'react-window';

import './styles.css';

const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    Row {index}
  </div>
);

const Example = () => (
  <List
    className="List"
    height={150}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);

ReactDOM.render(<Example />, document.getElementById('root'));
```



### Variable Size List

前提是知道每个元素的高度，getItemSize函数获取各元素的方法

```jsx
import { VariableSizeList as List } from 'react-window';
 
// These row heights are arbitrary.
// Yours should be based on the content of the row.
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));
 
const getItemSize = index => rowHeights[index];
 
const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);
 
const Example = () => (
  <List
    height={150}
    itemCount={1000}
    itemSize={getItemSize}
    width={300}
  >
    {Row}
  </List>
);
```

### Scrolling Indicators 滚动标识

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeList as List } from 'react-window';

import './styles.css';

const Row = ({ index, isScrolling, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    {isScrolling ? 'Scrolling' : `Row ${index}`}
  </div>
);

const Example = () => (
  <List
    className="List"
    height={150}
    itemCount={1000}
    itemSize={35}
    useIsScrolling
    width={300}
  >
    {Row}
  </List>
);

ReactDOM.render(<Example />, document.getElementById('root'));
```

### Scrolling to an item 滚动到指定位置

```jsx
Row 296Row 297Row 298Row 299Row 300Row 301Row 302Row 303
Try it on CodeSandbox
import { FixedSizeList as List } from 'react-window';
 
const listRef = React.createRef();
 
绑定ref
<List ref={listRef} {...props} />
 
listRef.current.scrollToItem(200);
 
// 可以指定item出现的位置: center, start, or end.
listRef.current.scrollToItem(300, "center");
```



### Memoized List items

不让items重新渲染

[编写更快的 React 代码（一）：memoize-one 简介 - 简书 (jianshu.com)](https://www.jianshu.com/p/b123bbe0330c)

[记忆化技术介绍——使用闭包提升你的 React 性能 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/37913276)

```jsx
import React, { PureComponent, memo } from 'react';
import ReactDOM from 'react-dom';
import memoize from 'memoize-one';
import { FixedSizeList as List, areEqual } from 'react-window';

const generateItems = numItems =>
  Array(numItems)
    .fill(true)
    .map(_ => ({
      isActive: false,
      label: Math.random()
        .toString(36)
        .substr(2),
    }));

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent
const Row = memo(({ data, index, style }) => {
  // Data passed to List as "itemData" is available as props.data
  const { items, toggleItemActive } = data;
  const item = items[index];

  return (
    <div onClick={() => toggleItemActive(index)} style={style}>
      {item.label} is {item.isActive ? 'active' : 'inactive'}
    </div>
  );
}, areEqual);

// This helper function memoizes incoming props,
// To avoid causing unnecessary re-renders pure Row components.
// This is only needed since we are passing multiple props with a wrapper object.
// If we were only passing a single, stable value (e.g. items),
// We could just pass the value directly.
const createItemData = memoize((items, toggleItemActive) => ({
  items,
  toggleItemActive,
}));

// In this example, "items" is an Array of objects to render,
// and "toggleItemActive" is a function that updates an item's state.
function Example({ height, items, toggleItemActive, width }) {
  // Bundle additional data to list items using the "itemData" prop.
  // It will be accessible to item renderers as props.data.
  // Memoize this data to avoid bypassing shouldComponentUpdate().
  const itemData = createItemData(items, toggleItemActive);

  return (
    <List
      height={height}
      itemCount={items.length}
      itemData={itemData}
      itemSize={35}
      width={width}
    >
      {Row}
    </List>
  );
}

class ExampleWrapper extends PureComponent {
  state = {
    items: generateItems(1000),
  };

  toggleItemActive = index =>
    this.setState(prevState => {
      const item = prevState.items[index];
      const items = prevState.items.concat();
      items[index] = {
        ...item,
        isActive: !item.isActive,
      };
      return { items };
    });

  render() {
    return (
      <Example
        height={150}
        items={this.state.items}
        toggleItemActive={this.toggleItemActive}
        width={300}
      />
    );
  }
}

ReactDOM.render(<ExampleWrapper />, document.getElementById('root'));
```



### RTL layout

但是在中东地区，有很多国家，诸如像阿拉伯语、希伯来语，他们的阅读习惯却是从右到左的，恰好跟我们是相反的，我也查阅了大量阿拉伯语的网站的设计，感兴趣也可以点击下面的网站看看：

- [http://wam.ae/ar](https://link.zhihu.com/?target=http%3A//wam.ae/ar)
- [https://www.emaratalyoum.com/](https://link.zhihu.com/?target=https%3A//www.emaratalyoum.com/)

通过上面的网站，可以很直观地看出像阿拉伯语，典型 RTL 布局网站的特点：

1. 文字都是右对齐，并且是从右往左阅读的
2. 排版都是从右到左的，在一个产品列表中，右边第一个商品是第一个
3. 箭头代表的意义刚好相反，比如在轮播图中，向左箭头代表下一帧，而向右箭头则代表查看上一张图片



[国际化 - 通用 LTR/RTL 布局解决方案 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/47864242)

## 参考

[使用 react-window 虚拟化大型列表 (web.dev)](https://web.dev/i18n/zh/virtualize-long-lists-react-window/)

[使用 react-window 虚拟化大型列表 (web.dev)](https://web.dev/virtualize-long-lists-react-window/)



[react-virtualized | 张庆的笔记 (beaf.tech)](https://zqblog.beaf.tech/react-virtualized/)

## Friends

[bvaughn/react-virtualized:  (github.com)](https://github.com/bvaughn/react-virtualized)

Here are some great components built on top of react-virtualized:

- [react-infinite-calendar](https://github.com/clauderic/react-infinite-calendar): Infinite scrolling date-picker with localization, themes, keyboard support, and more
- [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc): Higher-order components to turn any list into an animated, touch-friendly, sortable list
- [react-sortable-tree](https://github.com/fritz-c/react-sortable-tree): Drag-and-drop sortable representation of hierarchical data
- [react-virtualized-checkbox](https://github.com/emilebres/react-virtualized-checkbox): Checkbox group component with virtualization for large number of options
- [react-virtualized-select](https://github.com/bvaughn/react-virtualized-select): Drop-down menu for React with windowing to support large numbers of options.
- [react-virtualized-tree](https://github.com/diogofcunha/react-virtualized-tree/): A reactive tree component that aims to render large sets of tree structured data in an elegant and performant way
- [react-timeline-9000](https://github.com/BHP-DevHub/react-timeline-9000/): A calendar timeline component that is capable of displaying and interacting with a large number of items

## 
