import React from "react";
import ReactDOM from "react-dom";
// import {Provider} from 'react-redux';
// import * as Server from './apis/index.js';
// import RouterMain from './router/index.js'; // router（需注释下方APP)
import App from "./App";
// import AppRedux from './AppRedux';
// import store from './store'
// import store, { persistor } from './reduxRelated/store';
// import { PersistGate } from 'redux-persist/lib/integration/react';

import "antd/dist/antd.less"; // 如果按需加载后，则注释该行
import "./app.less";

// ReactDOM.render(
//   <App></App>,
//   document.querySelector('#app')
// )

// eslint-disable-next-line no-undef
process.env.NODE_ENV === "development" && require("../mock/index.js");
// ReactDOM.render(
//     <RouterMain></RouterMain>,
//     document.querySelector('#app')
// )

// redux
// ReactDOM.render(
// 	<Provider store={store}>
// 		<PersistGate loading={null} persistor={persistor}>
// 			<AppRedux />
// 		</PersistGate>
// 	</Provider>,
// 	document.querySelector('#app')
// );

// mobx
// import MobxApp from './mobx/index';
// require('./mobx/index.js')
// import ObservePerson from './mobx/mobxReactLite';

// hooks
// import HooksIndex from './hooks/index';
// 自定义FormItem
// import DiyFormItem from './components/antd/dataDisplay/Form/DiyFormItem'

// 虚拟滚动
// import ReactWindowDemo from './others/virtualList/reactWindowDemo'
// import VirtualTable from './others/virtualList/VirtualTable'

// 表单
// import FormIndex from '@components/antd/dataDisplay/Form';
// import Hello from '@src/components/formily/hello.tsx';
// import Hello from '@components/formily/hello.tsx';
// import Hello from '@components/antd/dataEntry/Cascader/Hello.tsx';
// import FormDemo from '@components/antd/dataDisplay/Form';

// 上传
// import UploadIndex from '@components/antd/dataDisplay/Upload';

// echarts
// import EchartsPractice from './others/echartsPractice/helloWorld'

// import Tree from './components/antd/dataDisplay/Tree'
// import DefaultTree from './components/antd/dataDisplay/Tree/default'
// import HelloAntdPro from './components/antdPro/hello'
// import 'antd/dist/antd.css';
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

// 拖拽 drag
// import SortableList from './features/Drag/SortableList'
// require('./features/Drag/sortablehoc/basic')
// import Draghandle from './features/Drag/sortablehoc/drag-handle'
// require('./features/Drag/sortablehoc/collections')

import semiui from "./components/semiui";
