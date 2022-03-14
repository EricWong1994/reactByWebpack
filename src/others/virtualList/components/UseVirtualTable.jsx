// 计算出滚动条的宽度；用于“假滚动条”
import React, {PureComponent} from 'react'

function getScrollbarWidth() {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
  
    return scrollbarWidth;
}

const DEFAULT_ROW_HEIGHT = 32; // 默认表格单行高度
const OFFSET_HORIZONTAL = 300; // 横向滚动前、后偏移量
const OFFSET_VERTICAL = 120; // 纵向滚动上、下偏移量

const POSITION_TABLE_BODY = 'tableBody'; // 表示纵向滚动响应位置在表格内容上
const POSITION_VERTICAL_BAR = 'verticalBar'; // 表示纵向滚动响应位置在假滚动条上

class UseVirtualTable extends PureComponent {
virtualTable = null;
virtualTableHeight = 0; // 虚拟表格高度
virtualTableWidth = 0; // 虚拟表格宽度
scrollBarWidth = getScrollbarWidth(); // 滚动条宽度
scrollDom = null; // 纵向假滚动条节点
horizontalDom = null; // 横向滚动节点
verticalDom = null; // 纵向滚动节点
mousePosition = ''; // 鼠标所在位置，用于区别纵向滚动由哪个节点相应的
state = {
    totalHeight: 0, // 表格内容区域总高度
    totalWidth: 0, // 表格内容区域总宽度
    hiddenTopStyle: { // 顶部隐藏样式
    height: `0px`,
    },
    hiddenLeftStyle: { // 左侧隐藏样式
    width: `0px`,
    },
    hiddenRightStyle: { // 右侧隐藏样式
    width: `0px`,
    },
    rowSize: [0, 0], // 可视区域显示的行号
    colSize: [0, 0], // 可视区域显示的列号
};

componentDidMount() {
    this.setVirtualSize();
    this.setVerticalData();
    this.setHorizontalData();
}
    
// 设置虚拟表格高度、宽度
setVirtualSize = (dom) => {
    const virtualTable = dom || this.virtualTable;
    const height = virtualTable?.clientHeight;
    const width = virtualTable?.clientWidth;
    if (height && width) {
    this.virtualTableHeight = height;
    this.virtualTableWidth = width;
    }
};

getVirtualTableRef = (dom) => {
    this.virtualTable = dom || this.virtualTable;
    this.setVirtualSize(dom);
};

getTableHeaderDom = (dom) => {
    this.tableHeader = dom || this.tableHeader;
};

getScrollDom = (dom) => {
    this.scrollDom = dom || this.scrollDom;
};

getHorizontalDom = (dom) => {
    this.horizontalDom = dom || this.horizontalDom;
};

getVerticalDom = (dom) => {
    this.verticalDom = dom || this.verticalDom;
};

// 设置虚拟表格纵向数据；在纵向滚动时使用
setVerticalData = () => {
    const scrollTop = this.verticalDom && this.verticalDom.scrollTop;
    const { dataSource = [], columns = [] } = this.props;
    const { rowSize: oRowSize, colSize: oColSize } = this.state;
    // 计算表格头部所占用的高度
    const headerHeight = this.tableHeader?.clientHeight;
    // 计算表格内容可视区域高度
    const height = this.virtualTableHeight - headerHeight;
    const rowSize = [];
    let totalHeight = 0;
    let hiddenTopHeight = 0; // 计算顶部隐藏区域的高度
    let hiddenButtomHeight = 0;
    let currentStep = 0; // 0: 顶部被隐藏阶段；1: 可视区域阶段
    if (!height) {
    return;
    }
    
    dataSource.forEach((item, i) => {
    // 获取行高，目前这里是最简化的，可以根据需要进行扩展
    const rowHeight = DEFAULT_ROW_HEIGHT;
    totalHeight += rowHeight;
    if (currentStep === 0) {
        if (totalHeight >= scrollTop - OFFSET_VERTICAL) {
        // 根据 scrollTop 算出可视区域起始行号
        rowSize[0] = i;
        currentStep += 1;
        } else {
        hiddenTopHeight += rowHeight;
        }
    } else if (currentStep === 1) {
        if (totalHeight > scrollTop + height + OFFSET_VERTICAL) {
        // 计算出可视区域结束行号
        rowSize[1] = i;
        currentStep += 1;
        }
    }
    });

    if (oRowSize.join() !== rowSize.join()) {
    // 可视区域的行号有了变化才重新进行渲染
    this.setState({
        hiddenTopStyle: { height: `${hiddenTopHeight}px` },
        rowSize,
        totalHeight,
    });
    }
};
    
// 设置虚拟表格横向数据；在横向滚动时使用
setHorizontalData = () => {
    const scrollLeft = this.horizontalDom && this.horizontalDom.scrollLeft;
    const { columns = [] } = this.props;
    const { colSize: oColSize } = this.state;
    // 表格内容可视区域的宽度
    const width = this.virtualTableWidth;
    const colSize = [];
    let totalWidth = 0;
    let hiddenLeftWidth = 0; // 左侧隐藏未被渲染的宽度
    let hiddenRigthWidth = 0; // 右侧隐藏未被渲染的宽度
    let currentStep = 0; // 0: 前面被隐藏阶段；1: 可视区域阶段；2: 后面不可见区域
    if (!width) {
    return;
    }

    columns.forEach((item, i) => {
    const { width: colWidth = 160 } = item;
    totalWidth += colWidth;
    if (currentStep === 0) {
        if (totalWidth >= scrollLeft - OFFSET_HORIZONTAL) {
        // 根据 scrollLeft 算出可视区域起始行号
        colSize[0] = i;
        currentStep += 1;
        } else {
        hiddenLeftWidth += colWidth;
        }
    }
    if (currentStep === 1 && totalWidth > scrollLeft + width + OFFSET_HORIZONTAL) {
        // 计算出可视区域结束列号
        colSize[1] = i;
        currentStep += 1;
    }
    if (currentStep === 2) {
        hiddenRigthWidth += colWidth;
    }
    });

    if (oColSize.join() !== colSize.join()) {
    // 可视区域的列号有了变化才重新进行渲染
    this.setState({
        hiddenLeftStyle: { width: `${hiddenLeftWidth}px` },
        hiddenRightStyle: { width: `${hiddenRigthWidth}px` },
        colSize,
        totalWidth,
    });
    }
};

handleVerticalScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    // 内容区域纵向滚动逻辑，仅在“内容区域”滚动时执行
    if (this.mousePosition === POSITION_TABLE_BODY) {
    // 同步假滚动条 scrollTop 值
    this.scrollDom && (this.scrollDom.scrollTop = scrollTop);
    this.verticalTop = scrollTop;
    this.setVerticalData(scrollTop);
    }
};

handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    // 假滚动条纵向滚动逻辑，仅在“假滚动条”滚动时执行
    if (this.mousePosition === POSITION_VERTICAL_BAR) {
    // 同步内容区域 scrollTop 值
    this.verticalDom && (this.verticalDom.scrollTop = scrollTop);
    this.verticalTop = scrollTop;
    this.setVerticalData();
    }
};

handleHorizontalScroll = (e) => {
    e.stopPropagation();
    const scrollLeft = e.target.scrollLeft;
    this.scrollDom && (this.scrollDom.scrollLeft = scrollLeft);
    this.setHorizontalData();
};

handleBodyMouseEnter = () => {
    this.mousePosition = POSITION_TABLE_BODY;
};

handleVerScrollMouseEnter = () => {
    this.mousePosition = POSITION_VERTICAL_BAR;
};

tableHeaderRender = () => {
    const { columns } = this.props;
    const cols = [];
    const ths = [];
    columns.forEach((col, i) => {
    const { code, name, width = 160 } = col;
    const key = `${key}-${i}`;
    cols.push(<col key={key} width={`${width}px`} />);
    ths.push(<th key={key} className="table-header-cell">{name}</th>);
    });

    return (
    <div className="table-header" ref={this.getTableHeaderDom}>
        <table>
        <colgroup>{cols}</colgroup>
        <thead>
            <tr className='table-header-row'>{ths}</tr>
        </thead>
        </table>
    </div>
    );
};

tableBodyRender = () => {
    const { hiddenTopStyle, hiddenBottomStyle, hiddenLeftStyle, hiddenRightStyle, rowSize, colSize, totalHeight } = this.state;
    const { columns, dataSource = [] } = this.props;
    const showData = dataSource.slice(...rowSize);
    const showCols = columns.slice(...colSize);
    const cols = [];
    if (colSize[0]) {
    cols.push(<col key="first" width={hiddenLeftStyle.width} />);
    }
    showCols.forEach((col, i) => {
    const { code, width = 160 } = col;
    cols.push(<col key={`${code}-${colSize[0] + i}`} width={`${width}px`} />);
    });
    if (colSize[1]) {
    cols.push(<col key="last" width={hiddenRightStyle.width} />);
    }

    return (
    <div className="table-body" ref={this.getVerticalDom} onScroll={this.handleVerticalScroll} onMouseEnter={this.handleBodyMouseEnter}>
        <div className="table-body-total" style={{ height: `${totalHeight}px`, paddingTop: `${hiddenTopStyle?.height}` }}>
        <table>
            <colgroup>{cols}</colgroup>
            <tbody>
            {showData.map((row, i) => {
                const index = rowSize[0] + i;
                return (
                <tr className="table-row" key={index} data-rowindex={index} ref={this.getTrRef.bind(null, index)}>
                    {colSize[0] ? <td /> : null}
                    {showCols.map(({ code }, j) => {
                    const colIndex = colSize[0] + j;
                    return <td className="table-cell" key={`${code}-${colIndex}`} data-colindex={colIndex}>{row[code]}</td>;
                    })}
                    {colSize[1] ? <td /> : null}
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    </div>
    );
};

render() {
    const { totalHeight } = this.state;
    return <div className="use-virtual-table" ref={this.getVirtualTableRef} onScroll={this.handleHorizontalScroll}>
    <div className="use-virtual-table-body" ref={this.getHorizontalDom}>
        {this.tableHeaderRender()}
        {this.tableBodyRender()}
    </div>
    <div
        className="bar-virtual-vertical-scroll"
        style={{ height: `${this.virtualTableHeight - (this.tableHeader?.clientHeight || 34)}px`, width: `${this.scrollBarWidth}px` }}
        onScroll={this.handleScroll}
        ref={this.getScrollDom}
        onMouseEnter={this.handleVerScrollMouseEnter}
    >
        <div className='bar-body' style={{ height: `${totalHeight}px` }} />
    </div>
    </div>
}
}

export default UseVirtualTable;
  