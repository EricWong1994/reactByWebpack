import React, { PureComponent } from 'react';
import './UseVirtualTable.less';

class UseVirtualTable extends PureComponent {
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
    const { columns, dataSource = [] } = this.props;
    const cols = [];
    columns.forEach((col, i) => {
      const { code, width = 160 } = col;
      cols.push(<col key={`${code}-${i}`} width={`${width}px`} />);
    });

    return (
      <div className="table-body">
          <table>
            <colgroup>{cols}</colgroup>
            <tbody>
              {dataSource.map((row, i) => {
                return (
                  <tr className="table-row" key={i} data-rowindex={i}>
                    {columns.map(({ code }, j) => {
                      return <td className="table-cell" key={`${code}-${j}`} data-colindex={j}>{row[code]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    );
  };

  render() {
  	return (
    	<div className="use-virtual-table">
        <div className="use-virtual-table-body">
          {this.tableHeaderRender()}
          {this.tableBodyRender()}
        </div>
      </div>
    );
  }
}

export default UseVirtualTable;

