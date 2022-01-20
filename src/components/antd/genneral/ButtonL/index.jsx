import React from 'react'
import {Button} from 'antd'
import ReactDOM from 'react-dom';
// const mountNode = document.querySelector('#antd');
const mountNode = document.querySelector('#app');

export default function ButtonL() {
	return (
		<div>
			ButtonL
			<Button />
		</div>
	);
}
ReactDOM.render(<ButtonL />, mountNode);

