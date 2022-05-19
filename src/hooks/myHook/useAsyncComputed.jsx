import React, { useEffect, useState } from 'react';

// 模拟异步处理 props 的逻辑
const asyncHandler = v => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`已处理 ${v}`);
		}, 2000);
	});
};

/**
 * 处理 async 业务的 hooks 封装
 * @param {Function} func 异步逻辑函数
 * @param {Array} dep 依赖列表
 * @param {Object} initialValue 初始值
 */
function useAsyncComputed(func, dep, initialValue) {
	const [val, setVal] = useState(initialValue);

	// 借用 useEffect 执行异步逻辑
	useEffect(() => {
		let cancel = false;

		const handler = async () => {
			const res = await func();

			if (!cancel) {
				setVal(res);
			}
		};
		handler();

		// 卸载时标记 cancel 已退出，在进程中的异步逻辑将不会再改变 val 值
		return () => {
			cancel = true;
		};
	}, dep);

	return val;
}

function AsyncFC({ value }) {
	const computed = useAsyncComputed(
		() => asyncHandler(value),
		[value],
		value
	);

	return <div>{computed}</div>;
}

export const App = () => {
	const [state, setState] = useState('old');

	useEffect(() => {
		// 模拟一些异步处理，变化传入的 props
		setTimeout(() => {
			setState('new');
		}, 4000);
	}, []);

	return <AsyncFC value={state}></AsyncFC>;
};

// https://blog.csdn.net/qq_21567385/article/details/111823912

// export default App;
// export const App = App;
// export App;

// function App() {
// 	const [state, setState] = useState('old');

// 	useEffect(() => {
// 		// 模拟一些异步处理，变化传入的 props
// 		setTimeout(() => {
// 			setState('new');
// 		}, 4000);
// 	}, []);

// 	return <AsyncFC value={state}></AsyncFC>;
// }
