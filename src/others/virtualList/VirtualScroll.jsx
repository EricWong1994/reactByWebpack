import React, { useRef, useState, useEffect } from 'react';
import { requestTimeout, cancelTimeout } from '../../utils/timer';
import styles from './index.less';

const VirtualScroll = ({ data, itemHeight, preload = 1, renderItem }) => {
	const [v, setUpdateValue] = useState(0); // 用来更新组件
	const containerRef = useRef(null);
	const resetIsScrollingTimeoutId = useRef(null);

	/**
	 * 可视区域滚动事件
	 * 防抖处理
	 */
	const onScroll = e => {
		if (resetIsScrollingTimeoutId.current !== null) {
			cancelTimeout(resetIsScrollingTimeoutId.current);
		}

		resetIsScrollingTimeoutId.current = requestTimeout(() => {
			setUpdateValue(val => val + 1);
		}, 150);
	};

	useEffect(() => {
		if (containerRef.current) {
			setUpdateValue(val => val + 1);
		}
	}, [containerRef.current]);

	if (!containerRef.current) {
		return <div className={styles.container} ref={containerRef}></div>;
	}

	let start = 0; // 开始的索引
	let end = 0; // 结束索引
	// const screenHeight = 300;
	const { scrollTop, offsetHeight: screenHeight } = containerRef.current;
	const visibleCount = Math.ceil(screenHeight / itemHeight); // 显示的数量
	start = Math.floor((scrollTop + screenHeight) / itemHeight) - preload; // 开始的索引
	start = start < 0 ? 0 : start; // 判断边界

	end = start + visibleCount + preload; //
	end = end > data.length ? data.length : end; // 判断结束边界

	const visibleData = data
		.map((item, index) => {
			item.index = index;
			return item;
		})
		.slice(start, end);

	/**
	 * ${data.length * itemHeight}px 容器的总高度
	 * ${ item.index * itemHeight}px 没个元素的高度
	 */
	return (
		<div
			className={styles.container}
			ref={containerRef}
			onScroll={onScroll}
		>
			<div
				style={{
					width: '100%',
					height: `${data.length * itemHeight}px`,
				}}
			>
				{visibleData?.map((item, index) => {
					return (
						<div
							key={item.index}
							style={{
								position: 'absolute',
								width: '100%',
								height: `${itemHeight}px`,
								top: `${item.index * itemHeight}px`,
							}}
						>
							{renderItem(item)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default VirtualScroll;
