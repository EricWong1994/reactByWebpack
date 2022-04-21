// Table 组件，state 更新的时候不会同步更新使用 render的列(Select组件），导致此列数据不同步
// https://github.com/ant-design/ant-design/issues/35024
// https://codesandbox.io/s/ji-ben-yong-fa-antd-4-19-5-forked-1tnc7m?file=/index.js:0-2973
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Select, Tag, Space } from 'antd';

export default class TreeData extends PureComponent {
	state = {
		selectedValues: {},
		selectedList: ['1', '2'],
	};

	test = record => {
		return value => {
			const { selectedValues } = this.state;
			const newSelect = { ...selectedValues };
			newSelect[record.address] = value;
			newSelect['test3'] = undefined;
			newSelect['test3'] = '1';
			this.setState({ selectedValues: newSelect });
			console.log(record.address);
		};
	};

	data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'test1',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'test2',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'test3',
			tags: ['cool', 'teacher'],
		},
	];

	render() {
		const { selectedValues, selectedList } = this.state;
		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
				render: text => <a>{text}</a>,
			},
			{
				title: 'Age1',
				dataIndex: 'age',
				key: 'age',
			},
			{
				title: 'Address',
				render: (text, record) => {
					const { selectedValues, selectedList } = this.state;
					return (
						<Select
							onChange={this.test(record)}
							value={selectedValues[record.address]}
						>
							{selectedList.map(i => (
								<Select.Option key={i} value={i}>
									{i}
								</Select.Option>
							))}
						</Select>
					);
				},
			},
			{
				title: 'Tags',
				key: 'tags',
				dataIndex: 'tags',
				render: tags => (
					<>
						{tags.map(tag => {
							let color = tag.length > 5 ? 'geekblue' : 'green';
							if (tag === 'loser') {
								color = 'volcano';
							}
							return (
								<Tag color={color} key={tag}>
									{tag.toUpperCase()}
								</Tag>
							);
						})}
					</>
				),
			},
			{
				title: 'Action',
				key: 'action',
				render: (text, record) => (
					<Space size='middle'>
						<a>Invite {record.name}</a>
						<a>Delete</a>
					</Space>
				),
			},
		];
		return (
			<div>
				<Table columns={columns} dataSource={this.data} />
				<Select value={selectedValues['test3']}>
					{selectedList.map(i => (
						<Select.Option key={i} value={i}>
							{i}
						</Select.Option>
					))}
				</Select>
			</div>
		);
	}
}

ReactDOM.render(<TreeData />, document.getElementById('container'));
