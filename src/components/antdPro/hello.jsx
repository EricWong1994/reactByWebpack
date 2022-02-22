import React from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import ReactDOM from 'react-dom';
const mountNode = document.querySelector('#antd');
import ProLayout from './ProLayout';
import ProTableComp from './ProTableComp';

const Demo = () => {
	return (
		<ProForm
			onFinish={async values => {
				console.log(values);
			}}
		>
			<ProFormText name='name' label='姓名' />
		</ProForm>
	);
};

// ReactDOM.render(<Demo />, mountNode);
// ReactDOM.render(<ProLayout />, mountNode);
ReactDOM.render(<ProTableComp />, mountNode);
