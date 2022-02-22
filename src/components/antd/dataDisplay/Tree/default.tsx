// todo 按需加载失效
import React from 'react';
import ReactDOM from 'react-dom';
import { Tree } from 'antd';
const mountNode = document.querySelector('#antd');

// const treeData = [
// 	{
// 		title: 'parent 1',
// 		key: '0-0',
// 		children: [
// 			{
// 				title: 'parent 1-0',
// 				key: '0-0-0',
// 				disabled: true,
// 				children: [
// 					{
// 						title: 'leaf',
// 						key: '0-0-0-0',
// 						disableCheckbox: true,
// 					},
// 					{
// 						title: 'leaf',
// 						key: '0-0-0-1',
// 					},
// 				],
// 			},
// 			{
// 				title: 'parent 1-1',
// 				key: '0-0-1',
// 				children: [
// 					{
// 						title: (
// 							<span
// 								style={{
// 									color: '#1890ff',
// 								}}
// 							>
// 								sss
// 							</span>
// 						),
// 						key: '0-0-1-0',
// 					},
// 				],
// 			},
// 		],
// 	},
// ];

// const Demo = () => {
// 	const onSelect = (selectedKeys, info) => {
// 		console.log('selected', selectedKeys, info);
// 	};

// 	const onCheck = (checkedKeys, info) => {
// 		console.log('onCheck', checkedKeys, info);
// 	};

// 	return (
// 		<Tree
// 			checkable
// 			defaultExpandedKeys={['0-0-0', '0-0-1']}
// 			defaultSelectedKeys={['0-0-0', '0-0-1']}
// 			defaultCheckedKeys={['0-0-0', '0-0-1']}
// 			onSelect={onSelect}
// 			onCheck={onCheck}
// 			treeData={treeData}
// 		/>
// 	);
// };

// ReactDOM.render(<Demo />, mountNode);

const treeData = [
	{
		title: 'parent 1',
		key: '0-0',
		children: [
			{
				title: 'parent 1-0',
				key: '0-0-0',
				disabled: true,
				children: [
					{
						title: 'leaf',
						key: '0-0-0-0',
						disableCheckbox: true,
					},
					{
						title: 'leaf',
						key: '0-0-0-1',
					},
				],
			},
			{
				title: 'parent 1-1',
				key: '0-0-1',
				children: [
					{
						title: <span style={{ color: '#1890ff' }}>sss</span>,
						key: '0-0-1-0',
					},
				],
			},
		],
	},
];

const Demo = () => {
	const onSelect = (selectedKeys: React.Key[], info: any) => {
		console.log('selected', selectedKeys, info);
	};

	const onCheck = (checkedKeys: React.Key[], info: any) => {
		console.log('onCheck', checkedKeys, info);
	};

	return (
		<Tree
			checkable
			defaultExpandedKeys={['0-0-0', '0-0-1']}
			defaultSelectedKeys={['0-0-0', '0-0-1']}
			defaultCheckedKeys={['0-0-0', '0-0-1']}
			onSelect={onSelect}
			onCheck={onCheck}
			treeData={treeData}
		/>
	);
};

ReactDOM.render(<Demo />, mountNode);
