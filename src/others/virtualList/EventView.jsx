// https://juejin.cn/post/7049680466617565191#heading-0
import React from 'react';
import { FullScreenBox, VirtualScroll } from './VirtualScroll';
import { BarChart } from 'charts';
import { Row, Col, Select } from 'antd';

//造数据
let eventRateData = [];
for (let index = 0; index < 60; index++) {
	const d = [
		{ x: 'text', y: 3.0, itemType: null, count: 0 },
		{ x: 'asdasdzzzcv', y: 1.0, itemType: null, count: 0 },
	];
	d.cacheIndex = index + 1;
	eventRateData.push(d);
}

// 对数据进行分组，每组有3条chart数据
function arrayGroup(arr, count = 3) {
	const arrResult = [];
	let begin = 0;
	let end = count;
	for (let i = 0; i < Math.ceil(arr.length / count); i++) {
		const splitArr = arr.slice(begin, end);
		arrResult.push(splitArr);
		begin = end;
		end = end + count;
	}
	return arrResult;
}

function Chart({ data }) {
	return (
		<BarChart
			data={data}
			height={200}
			title
			alias={['数据集名称', '引用次数']}
		/>
	);
}

const EventView = props => {
	const [state, setState] = useImmer({
		count: 20,
	});
	let data = eventRateData.slice(0, state.count);
	data = arrayGroup(data, 3);

	const renderItem = item => {
		return (
			<Row>
				{item.map(child => {
					return (
						<Col span={8} style={{ height: '200px' }}>
							<Chart
								data={child}
								title
								alias={['数据集名称', '引用次数']}
							/>
						</Col>
					);
				})}
			</Row>
		);
	};

	return (
		<VirtualScroll
			renderItem={renderItem}
			data={data}
			itemHeight={200}
			preload={3}
		></VirtualScroll>
	);
};

export default EventView;
