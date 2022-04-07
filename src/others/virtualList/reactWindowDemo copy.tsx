import React, { useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid, FixedSizeList as List } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table, Card } from 'antd';
import ReactDOM from 'react-dom';
import VariableExample from './components/VariableExample';

const Row = ({ index, style }: { index: number; style: object }) => (
	<div style={style}>Row {index}</div>
);

const Example = () => (
	<List height={150} itemCount={1000} itemSize={35} width={300}>
		{Row}
	</List>
);

function VirtualTable(props: Parameters<typeof Table>[0]) {
	const { columns, scroll } = props;
	// console.log('scroll: ', scroll);
	const [tableWidth, setTableWidth] = useState(0);
	console.log('tableWidth: ', tableWidth);

	// todo 感叹号是什么意思 非空断言
	const widthColumnCount = columns!.filter(({ width }) => !width).length;
	console.log('widthColumnCount: ', widthColumnCount); // 3
	const mergedColumns = columns!.map(column => {
		if (column.width) {
			return column;
		}
		console.log(
			'tableWidth / widthColumnCount',
			tableWidth / widthColumnCount
		);

		return {
			...column,
			width: Math.floor(tableWidth / widthColumnCount),
		};
	});
	console.log('mergedColumns: ', mergedColumns);

	const gridRef = useRef<any>();
	const [connectObject] = useState<any>(() => {
		const obj = {};
		Object.defineProperty(obj, 'scrollLeft', {
			get: () => null,
			set: (scrollLeft: number) => {
				if (gridRef.current) {
					gridRef.current.scrollTo({ scrollLeft });
				}
			},
		});

		return obj;
	});
	console.log('connectObject: ', connectObject);

	const resetVirtualGrid = () => {
		// gridRef.current.resetAfterIndices({
		// 	columnIndex: 0,
		// 	shouldForceUpdate: true,
		// });
	};

	useEffect(() => resetVirtualGrid, [tableWidth]);

	const renderVirtualList = (
		rawData: object[],
		{ scrollbarSize, ref, onScroll }: any
	) => {
		ref.current = connectObject;
		const totalHeight = rawData.length * 54;

		return (
			<Grid
				ref={gridRef}
				className='virtual-grid'
				columnCount={mergedColumns.length}
				columnWidth={(index: number) => {
					const { width } = mergedColumns[index];
					console.log('width: ', width);
					return totalHeight > scroll!.y! &&
						index === mergedColumns.length - 1
						? (width as number) - scrollbarSize - 1
						: (width as number);
				}}
				height={scroll!.y as number}
				rowCount={rawData.length}
				rowHeight={() => 54}
				width={tableWidth}
				onScroll={({ scrollLeft }: { scrollLeft: number }) => {
					onScroll({ scrollLeft });
				}}
			>
				{({
					columnIndex,
					rowIndex,
					style,
				}: {
					columnIndex: number;
					rowIndex: number;
					style: React.CSSProperties;
				}) => (
					<div
						className={classNames('virtual-table-cell', {
							'virtual-table-cell-last':
								columnIndex === mergedColumns.length - 1,
						})}
						style={style}
					>
						{
							(rawData[rowIndex] as any)[
								(mergedColumns as any)[columnIndex].dataIndex
							]
						}
					</div>
				)}
			</Grid>
		);
	};

	// const renderVirtualList = () => <h3>周六周六周六周六</h3>;

	return (
		<ResizeObserver
			onResize={({ width }) => {
				setTableWidth(width);
			}}
		>
			<Table
				{...props}
				className='virtual-table'
				columns={mergedColumns}
				pagination={false}
				components={{
					body: renderVirtualList,
				}}
			/>
		</ResizeObserver>
	);
}

// Usage
const columns = [
	{ title: 'A', dataIndex: 'key', width: 150 },
	{ title: 'B', dataIndex: 'key' },
	// {
	// 	title: 'B',
	// 	// dataIndex: 'key',
	// 	render: () => {
	// 		return <h3>哈哈哈哈哈哈哈哈</h3>;
	// 	},
	// },
	{ title: 'C', dataIndex: 'key' },
	{ title: 'D', dataIndex: 'key' },
	{ title: 'E', dataIndex: 'key', width: 200 },
	{ title: 'F', dataIndex: 'key', width: 100 },
];

const data = Array.from({ length: 100000 }, (_, key) => ({ key }));
// [{key: 0}, {key: 1}, ...,  {key: 99998}, {key: 99999}]
// console.log('data: ', data);

ReactDOM.render(
	<div
		style={{
			padding: '30px',
		}}
	>
		<VirtualTable
			columns={columns}
			dataSource={data}
			scroll={{ y: 300, x: '100vw' }}
		/>
		{/* <Card
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '30px',
			}}
		>
			<Example />
			<VariableExample />
		</Card> */}
	</div>,
	document.getElementById('app')
);
