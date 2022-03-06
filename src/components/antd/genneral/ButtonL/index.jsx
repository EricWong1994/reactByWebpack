import React from 'react'
import {Button} from 'antd'
// import Button from '/Users/v_wangshihao01/Desktop/github/ant-design/lib/button/button.js';
import ReactDOM from 'react-dom';
// const mountNode = document.querySelector('#antd');
const mountNode = document.querySelector('#app');

export default function ButtonL() {
	return (
		<div>
			hello ant-design
			<Button />
		</div>
	);
}
ReactDOM.render(<ButtonL />, mountNode);

