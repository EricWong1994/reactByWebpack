import React from 'react'
import ReactDOM from 'react-dom'
import * as Server  from './apis/index.js'
import RouterMain from './router/index.js'
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less'; // 按需加载后移除antd全局样式

process.env.NODE_ENV === 'development' && require('../mock/index.js')

ReactDOM.render(
    <RouterMain></RouterMain>,
    document.querySelector('#app')
)

// import TableTest from '@components/antd/dataDisplay/Table';
// import ColumnsTest from '@components/antd/dataDisplay/Table/Columns';
// import AlertTest from '@components/antd/feedBack/Alert';
// import BackTopTest from '@components/antd/others/backTop';
// import GridTest from '@components/antd/layout/Grid';
// import LayoutTest from '@components/antd/layout/Layout';