import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, Button } from 'antd';
// import { a } from 'src/common/a';
import { a } from '@common/a';
// import { a } from '@src/';
// import { a } from '@components';

import Index from './pages/index/index';
// import './app.less';

export default function App() {
	const myGetPrefixCls = (
		suffixCls?: string,
		customizePrefixCls?: string
	) => {
		if (customizePrefixCls) return customizePrefixCls;

		return suffixCls ? `hhh-${suffixCls}` : 'hhh';
	};
	const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
	const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
	const testRes = isTwoCNChar('中文');
	const buttonRefCN = useRef(null);

	return (
		<div>
			<div className='app-test'>App</div>
			<Button>Button</Button>
			<br></br>
			<ConfigProvider
				componentSize='large'
				// prefixCls={'ericWong'}
			>
				<Button>large Button</Button>
				<Button ref={buttonRefCN}>中文</Button>
				<TestFuncitonComp></TestFuncitonComp>
			</ConfigProvider>
		</div>
	);
}

// ReactDOM.render(<App></App>, document.querySelector('#app'));
// ReactDOM.render(<Index />, document.querySelector('#app'));

function TestFuncitonComp() {
	// debugger;
	const [count, setCount] = useState(0);
	console.log('useState: ', useState);

	const increase = () => {
		a();
		setCount(count + 1);
	};

	return (
		<div>
			TestComp
			<h3>{count}</h3>
			<Button onClick={increase}>+</Button>
		</div>
	);
}

// function TestClassComp() {
// 	// debugger;
// 	const [count, setCount] = useState(0);
// 	console.log('useState: ', useState);

// 	const increase = () => {
// 		console.log(this);
// 		setCount(count + 1);
// 	};

// 	return (
// 		<div>
// 			TestComp
// 			<h3>{count}</h3>
// 			<Button onClick={increase}>+</Button>
// 		</div>
// 	);
// }
