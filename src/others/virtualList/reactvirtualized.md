react-virtualized

[react-virtualized (bvaughn.github.io)](http://bvaughn.github.io/react-virtualized/#/components/List)

[react-virtualized 中文文档~v9.22.3 - 掘金 (juejin.cn)](https://juejin.cn/post/6919682256277602312#heading-0)



区别

 Adding a `react-virtualized` list to a CRA project increases the (gzipped) build size by ~33.5 KB. 

Adding a `react-window` list to a CRA project increases the (gzipped) build size by <2 KB.

### 使用

```jsx
// 你可以像这样引入任何你需要的组件
import {Column, Table} from 'react-virtualized';

// 但是如果你只使用 某几个组件
// 并且你不希望增加你的打包体积
// 你可以像下面这样引用
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
```

嫌麻烦的话，配置别名：

```js
// Partial webpack.config.js
{
  alias: {
    'react-virtualized/List': 'react-virtualized/dist/es/List',
  },
  ...rest
}
```

Then you can just import like so:

```js
import List from 'react-virtualized/List';

// Now you can use <List {...props} />
```

You can also use a global-friendly UMD build:

```
<link rel="stylesheet" href="path-to-react-virtualized/styles.css" />
<script src="path-to-react-virtualized/dist/umd/react-virtualized.js"></script>
```

Now you're ready to start using the components. You can learn more about which components react-virtualized has to offer [below](https://github.com/bvaughn/react-virtualized#documentation).

## Pure Components 

TODO 

By default all react-virtualized components use [`shallowCompare`](https://facebook.github.io/react/docs/shallow-compare.html) to avoid re-rendering unless props or state has changed. This occasionally confuses users when a collection's data changes (eg `['a','b','c']` => `['d','e','f']`) but props do not (eg `array.length`).

The solution to this is to let react-virtualized know that something external has changed. This can be done a couple of different ways.

###### Pass-thru props

The `shallowCompare` method will detect changes to any props, even if they aren't declared as `propTypes`. This means you can also pass through additional properties that affect cell rendering to ensure changes are detected. For example, if you're using `List` to render a list of items that may be re-sorted after initial render- react-virtualized would not normally detect the sort operation because none of the properties it deals with change. However you can pass through the additional sort property to trigger a re-render. For example:

```
<List {...listProps} sortBy={sortBy} />
```

###### Public methods

`Grid` and `Collection` components can be forcefully re-rendered using [`forceUpdate`](https://facebook.github.io/react/docs/component-api.html#forceupdate). For `Table` and `List`, you'll need to call [`forceUpdateGrid`](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md#forceupdategrid) to ensure that the inner `Grid` is also updated. For `MultiGrid`, you'll need to call [`forceUpdateGrids`](https://github.com/bvaughn/react-virtualized/blob/master/docs/MultiGrid.md#forceupdategrids) to ensure that the inner `Grid`s are updated.

## Documentation

API documentation available [here](https://github.com/bvaughn/react-virtualized/blob/master/docs/README.md).

There are also a couple of how-to guides:

## Components

### [Collection](https://github.com/bvaughn/react-virtualized/blob/master/docs/Collection.md)

Demo: [Collection](https://bvaughn.github.io/react-virtualized/#/components/Collection)

呈现散乱或非线性数据。与呈现棋盘格数据的 Grid 不同，Collection 可以呈现任意位置的数据，甚至可以呈现重叠的数据

React-virtualized中的Collection组件用于渲染可滚动的集合数据，例如列表、网格等。它优化了性能，通过仅在屏幕上显示可见的集合项来减少 DOM 元素的数量，从而提高了应用程序的性能和响应速度。它的使用方法与其他 React 组件类似，可以通过传递 props 来配置它的外观和行为，包括渲染的单元格大小、行列数、滚动方向、列表项高度、宽度等。通过使用 Collection 组件，可以有效地处理大量数据，同时避免 DOM 元素过多导致的性能问题。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Collection} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

// Collection data as an array of objects
const list = [
  {name: 'Brian Vaughn', x: 13, y: 34, width: 123, height: 234},
  // And so on...
];

function cellRenderer({index, key, style}) {
  return (
    <div key={key} style={style}>
      {list[index].name}
    </div>
  );
}

function cellSizeAndPositionGetter({index}) {
  const datum = list[index];

  return {
    height: datum.height,
    width: datum.width,
    x: datum.x,
    y: datum.y,
  };
}

// Render your grid
ReactDOM.render(
  <Collection
    cellCount={list.length}
    cellRenderer={cellRenderer}
    cellSizeAndPositionGetter={cellSizeAndPositionGetter}
    height={300}
    width={300}
  />,
  document.getElementById('example'),
);
```



### [Grid](https://github.com/bvaughn/react-virtualized/blob/master/docs/Grid.md)

Demo: [Grid](https://bvaughn.github.io/react-virtualized/#/components/Grid)



### [List](https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md)

Demo: [List](https://bvaughn.github.io/react-virtualized/#/components/List)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {List} from 'react-virtualized';

// List data as an array of strings
const list = [
  'Brian Vaughn',
  // And so on...
];

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}

// Render your list
ReactDOM.render(
  <List
    width={300}
    height={300}
    rowCount={list.length}
    rowHeight={20}
    rowRenderer={rowRenderer}
  />,
  document.getElementById('example'),
);
```



### [Masonry](https://github.com/bvaughn/react-virtualized/blob/master/docs/Masonry.md)

Demo: [Masonry](https://bvaughn.github.io/react-virtualized/#/components/Masonry)

### Table

Demo: [Table](https://bvaughn.github.io/react-virtualized/#/components/Table)



#### [Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md)

#### [SortDirection](https://github.com/bvaughn/react-virtualized/blob/master/docs/SortDirection.md)



## High-Order Components

### [ArrowKeyStepper](https://github.com/bvaughn/react-virtualized/blob/master/docs/ArrowKeyStepper.md)

Demo: [ArrowKeyStepper](https://bvaughn.github.io/react-virtualized/#/components/ArrowKeyStepper)



### [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md)

Demo: [AutoSizer](https://bvaughn.github.io/react-virtualized/#/components/AutoSizer)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {AutoSizer, List} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

// List data as an array of strings
const list = [
  'Brian Vaughn',
  // And so on...
];

function rowRenderer({key, index, style}) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}

// Render your list
ReactDOM.render(
  <AutoSizer>
    {({height, width}) => (
      <List
        height={height}
        rowCount={list.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
        width={width}
      />
    )}
  </AutoSizer>,
  document.getElementById('example'),
);
```

#### 应用

```jsx
import React from 'react'
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer'
import { List as VList } from 'react-virtualized/dist/commonjs/List'

class StudentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    getList = () => {
        api.getList.then(res => {
            this.setState({
                list: res
            })
        })
    }
    componentDidMount() {
        this.getList()
    }
    render() {
        const { list } = this.state  
        const renderItem = ({ index, key, style }) => {
            return <Student key={key} student={list[index]} style{style} />
        }
        return (
            <div style={{height: 1000}}>
                <AutoSizer>
                    {({ width, height }) => (
                        <VList
                            width={width}
                            height={height}
                            overscanRowCount={10}
                            rowCount={list.length}
                            rowHeight={100}
                            rowRenderer={renderItem}
                        />
                    )}
                </AutoSizer>
            </div>
        )
    }
}
```

#### 城市列表

[react-virtualized使用 - 掘金 (juejin.cn)](https://juejin.cn/post/6994833349772574728#heading-7)



### [CellMeasurer](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md)

高度不固定

Demo: [CellMeasurer](https://bvaughn.github.io/react-virtualized/#/components/CellMeasurer)

High-order component that automatically measures a cell's contents by temporarily rendering it in a way that is not visible to the user. Specify a fixed width to measure dynamic height (or vice versa). This is an advanced component and has some limitations and performance considerations. [See below for more information](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md#limitations-and-performance-considerations).

`CellMeasurer` can be used with `Grid`, `List`, and `Table` components. It is not intended to be used with the `Collection` component.

#### Prop Types

| Property    | Type                | Required? | Description                                                  |
| ----------- | ------------------- | --------- | ------------------------------------------------------------ |
| cache       | `CellMeasurerCache` | ✓         | Cache to be shared between `CellMeasurer` and its parent `Grid`. Learn more [here](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md#cellmeasurercache). |
| children    | Element or Function | ✓         | Either a React element as a child (eg `<div />`) or a function (eg. `({ measure, registerChild }) => <div ref={registerChild} />`). See [below](https://github.com/bvaughn/react-virtualized/blob/master/docs/CellMeasurer.md#using-cellmeasurer-with-images) for more detailed examples. |
| columnIndex | number              | ✓         | Index of column being measured (within the parent `Grid`) or 0 (if used within a `List` or `Table`). |
| parent      | `Grid`              | ✓         | Reference to the parent `Grid`; this value is passed by `Grid` to the `cellRenderer` and should be passed along as-is. |
| rowIndex    | number              | ✓         | Index of row being measured (within the parent `Grid`).      |

#### Render Props

| Property      | Type     | Description                                                  |
| ------------- | -------- | ------------------------------------------------------------ |
| measure       | Function | Perform the cell measurements.                               |
| registerChild | Function | Specify DOM element to be measured, can be used as a `ref` (by default `WindowScroller` uses `ReactDOM.findDOMNode` function). |

其它api略



#### 应用

```jsx
import React from 'react'
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer'
import { List as VList } from 'react-virtualized/dist/commonjs/List'
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized/dist/commonjs/CellMeasurer'

class StudentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    measureCache = new CellMeasurerCache({
        fixedWidth: true,
        minHeight: 58
    })
    getList = () => {
        api.getList.then(res => {
            this.setState({
                list: res
            })
        })
    }
    componentDidMount() {
        this.getList()
    }
    render() {
        const { list } = this.state  
        const renderItem = ({ index, key, parent, style }) => {
            return (
                <CellMeasurer cache={this.measureCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
                    <Student key={key} student={list[index]} />
                </CellMeasurer>
            )
        }
        return (
            <div style={{height: 1000}}>
                <AutoSizer>
                    {({ width, height }) => (
                        <VList
                            ref={ref => this.VList = ref}
                            width={width}
                            height={height}
                            overscanRowCount={10}
                            rowCount={list.length}
                            rowHeight={this.getRowHeight}
                            rowRenderer={renderItem}
                            deferredMeasurementCache={this.measureCache}
                            rowHeight={this.measureCache.rowHeight}
                        />
                    )}
                </AutoSizer>
            </div>
        )
    }
}
```



### [ColumnSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/ColumnSizer.md)

Demo: [ColumnSizer](https://bvaughn.github.io/react-virtualized/#/components/ColumnSizer)



### [InfiniteLoader](https://github.com/bvaughn/react-virtualized/blob/master/docs/InfiniteLoader.md)

Demo: [InfiniteLoader](https://bvaughn.github.io/react-virtualized/#/components/InfiniteLoader)



### [MultiGrid](https://github.com/bvaughn/react-virtualized/blob/master/docs/MultiGrid.md)

Demo: [MultiGrid](https://bvaughn.github.io/react-virtualized/#/components/MultiGrid)

### [ScrollSync](https://github.com/bvaughn/react-virtualized/blob/master/docs/ScrollSync.md)

Demo: [ScrollSync](https://bvaughn.github.io/react-virtualized/#/components/ScrollSync)



### [WindowScroller](https://github.com/bvaughn/react-virtualized/blob/master/docs/WindowScroller.md)

Demo: [WindowScroller](https://bvaughn.github.io/react-virtualized/#/components/WindowScroller)



Here are some online demos of each component:

- [Customizing classes and styles](https://github.com/bvaughn/react-virtualized/blob/master/docs/customizingStyles.md)
- [Displaying items in reverse order](https://github.com/bvaughn/react-virtualized/blob/master/docs/reverseList.md)
- [Using AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/usingAutoSizer.md)
- [Creating an infinite-loading list](https://github.com/bvaughn/react-virtualized/blob/master/docs/creatingAnInfiniteLoadingList.md)
- [Natural sort Table](https://github.com/bvaughn/react-virtualized/blob/master/docs/tableWithNaturalSort.md)
- [Sorting a Table by multiple columns](https://github.com/bvaughn/react-virtualized/blob/master/docs/multiColumnSortTable.md)

## Examples

Examples for each component can be seen in [the documentation](https://github.com/bvaughn/react-virtualized/blob/master/docs/README.md).

And here are some "recipe" type demos:

- [Table with resizable (drag and drop) columns](https://codesandbox.io/s/j30k46l7xw)
- [Collapsable tree view](https://rawgit.com/bvaughn/react-virtualized/master/playground/tree.html)
- [Full-page grid (spreadsheet)](https://rawgit.com/bvaughn/react-virtualized/master/playground/grid.html)
- [Dynamic cell measuring](https://rawgit.com/bvaughn/react-virtualized/master/playground/chat.html)
- [Cell hover effects](https://rawgit.com/bvaughn/react-virtualized/master/playground/hover.html)

## Supported Browsers

react-virtualized aims to support all evergreen browsers and recent mobile browsers for iOS and Android. IE 9+ is also supported (although IE 9 will require some user-defined, custom CSS since flexbox layout is not supported).

If you find a browser-specific problem, please report it along with a repro case. The easiest way to do this is probably by forking [this Plunker](https://plnkr.co/edit/6syKo8cx3RfoO96hXFT1).



## 坑



## 参考

[react长列表优化方案: react-virtualized - 掘金 (juejin.cn)](https://juejin.cn/post/6844903603094683656#heading-0)

[用react-virtualized实现图片动态高度长列表 - 掘金 (juejin.cn)](https://juejin.cn/post/6966907428075995149)
