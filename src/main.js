import React from 'react'
import ReactDOM from 'react-dom'
import * as Server from './apis/index.js';
import RouterMain from './router/index.js';
// import App from './App';
// import Item from './mobxx/moboxReact';
// import ObservePerson from './mobxx/mobxReactLite';
import ObservePerson from './mobxx/mobxReactLite';
import EchartsPractice from './others/echartsPractice/helloWorld'
;

// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less'; // 按需加载后移除antd全局样式

process.env.NODE_ENV === 'development' && require('../mock/index.js');

// ReactDOM.render(
//     <RouterMain></RouterMain>,
//     document.querySelector('#app')
// )

// import TableTest from '@components/antd/dataDisplay/Table';
// import ColumnsTest from '@components/antd/dataDisplay/Table/Columns';
// import AlertTest from '@components/antd/feedBack/Alert';
// import BackTopTest from '@components/antd/others/backTop';
// import GridTest from '@components/antd/layout/Grid';
// import LayoutTest from '@components/antd/layout/Layout';

// import ErrorTest from '@components/advance/errorTest'; // 错误边界
// import Lazy from '@components/advance/lazy';

// 13
// import ColorBlockParent from '@components/advance/13/colorBlockParent';

// 14 antd 源码构建流程
// import ButtonL from '@components/antd/genneral/ButtonL/index';
