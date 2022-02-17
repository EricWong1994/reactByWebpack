import * as echarts from 'echarts';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
	BarChart,
	// 系列类型的定义后缀都为 SeriesOption
	BarSeriesOption,
	LineChart,
	LineSeriesOption,
} from 'echarts/charts';

import {
	TitleComponent,
	// 组件类型的定义后缀都为 ComponentOption
	TitleComponentOption,
	TooltipComponent,
	TooltipComponentOption,
	GridComponent,
	GridComponentOption,
	// 数据集组件
	DatasetComponent,
	DatasetComponentOption,
	// 内置数据转换器组件 (filter, sort)
	TransformComponent,
} from 'echarts/components';

export default function HelloWorld() {
	useEffect(() => {
		let chart = echarts.init(document.getElementById('echarts-container'));

		chart.setOption({
			title: {
				text: 'hello, echarts',
			},
			xAxis: {
				data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
			},
			tooltip: {},
			yAxis: {},
			series: [
				{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20],
				},
			],
		});
	});
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{/* <h3>HelloWorld</h3> */}
			<div
				id='echarts-container'
				style={{ width: 400, height: 400 }}
			></div>
		</div>
	);
}

ReactDOM.render(<HelloWorld />, document.querySelector('#app'));
