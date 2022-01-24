import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, Button } from 'antd';

export default function App() {
	const myGetPrefixCls = (
		suffixCls?: string,
		customizePrefixCls?: string
	) => {
		if (customizePrefixCls) return customizePrefixCls;

		return suffixCls ? `hhh-${suffixCls}` : 'hhh';
	};

	return (
		<div>
			<div>App</div>
			<Button>Button</Button>
			<br></br>
			<ConfigProvider componentSize='large' prefixCls={'ericWong'}>
				<Button>large Button</Button>
			</ConfigProvider>
		</div>
	);
}

ReactDOM.render(<App></App>, document.querySelector('#app'));
