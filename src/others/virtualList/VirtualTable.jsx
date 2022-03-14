import React, {useEffect} from 'react'
import UseVirtualTable from './components/UseVirtualTable';
import ReactDOM from 'react-dom'

function VirtualTable() {
    // 因为要模拟大数据量，真的一条一条 mock 数据是不现实的，写两个小函数吧

    // 构建 dataSource 数据
    const createDataSource = (rows, cols) => {
    const result = [];
    for (let i = 0; i < rows; i++) {
      const item = {};
      for (let j = 0; j < cols; j++) {
        item[`col_${j}`] = `ROW--${i}, COLUMN--${j}`;
      }
      result.push(item);
    }
    return result;
  };
  const dataSource = createDataSource(30, 15);

  // 构建 columns 列信息
  const createColumns = (data) => {
    const item = data[0];
    const columns = [];
    Object.keys(item).forEach((key) => {
      columns.push({
        code: key,
        name: key,
        width: 180,
      });
    });
    return columns;
  };
  const columns = createColumns(dataSource);
  useEffect(() => {
      console.log('columns: ', columns);
  }, [columns])
  
  return (
    <div>
        <h2>VirtualTable</h2>
        <UseVirtualTable dataSource={dataSource} columns={columns} useVirtual />
    </div>
  )
}

ReactDOM.render(<VirtualTable />, document.querySelector('#app'));

//   作者：阿里云数据库前端团队
//   链接：https://juejin.cn/post/7067726116861001764
//   来源：稀土掘金
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。