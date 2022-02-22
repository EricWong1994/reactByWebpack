import { Tree, Tag, Space } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const mountNode = document.querySelector('#antd');

function dig(path = '0', level = 3) {
	const list = [];
	for (let i = 0; i < 10; i += 1) {
		const key = `${path}-${i}`;
		const treeNode = {
			title: key,
			key,
		};

		if (level > 0) {
			treeNode.children = dig(key, level - 1);
		}

		list.push(treeNode);
	}
	return list;
}

const treeData = dig();

ReactDOM.render(
	<Tree treeData={treeData} height={233} defaultExpandAll />,
	mountNode
);
