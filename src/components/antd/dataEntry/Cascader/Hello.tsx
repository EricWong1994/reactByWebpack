import ReactDOM from 'react-dom';
import React from 'react';
import { Cascader } from 'antd';
const mountNode = document.querySelector('#antd');

const options = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
];

function onChange(value: unknown) {
	console.log(value);
}

ReactDOM.render(
	<Cascader
		options={options}
		onChange={onChange}
		placeholder='Please select'
	/>,
	mountNode
);
