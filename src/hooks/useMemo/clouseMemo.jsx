import React, { useState, useMemo } from 'react';
function App() {
	return <Demo1 />;
}

function Demo1() {
	const [num1, setNum1] = useState(1);
	const [num2, setNum2] = useState(10);

	const text = useMemo(() => {
		return `num1: ${num1} | num2:${num2}`;
	}, [num2]);

	function handClick() {
		setNum1(2);
		setNum2(20);
	}

	return (
		<div>
			<h3>ClouseMemo</h3>
			{text}
			<div>
				<button onClick={handClick}>click!</button>
			</div>
		</div>
	);
}

export default App;

// 从react hooks“闭包陷阱”切入，浅谈react hooks
//  https://juejin.cn/post/6844904193044512782

// text 是一个 useMemo ，它的依赖数组里面只有num2，没有num1，却同时使用了这两个state。当点击button 的时候，num1和num2的值都改变了。那么，只写明了依赖num2的 text 中能否拿到 num1 最新鲜的值呢？

// 是react为了判定，在本次更新中，是否需要执行其中的回调函数，这里依赖了的num2，而num2改变了。回调函数自然会执行， 这时形成的闭包引用的就是最新的num1和num2，
