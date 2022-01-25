import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, Button } from 'antd';
import './app.less';

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
	console.log('testRes: ', testRes);
	const buttonRefCN = useRef(null);
	console.log('buttonRefCN: ', buttonRefCN);

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
			</ConfigProvider>
		</div>
	);
}

ReactDOM.render(<App></App>, document.querySelector('#app'));
