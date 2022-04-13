import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import DualCounter from './DualCounter';
import DependenciesLists from './DependenciesLists';

function UseMemoIndex() {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		// console.log('useEffect with no dependency');
	});
	return (
		<div>
			UseMemoIndex
			{/* <Button onClick={() => setCounter(counter + 1)}>-</Button>
			<span>{counter}</span>
			<Button onClick={() => setCounter(counter + 1)}>+</Button>
			<br /> */}
			<DualCounter />
			<DependenciesLists />
		</div>
	);
}
// const mountNode = document.querySelector('#app');

// ReactDOM.render(<UseMemoIndex />, mountNode);
export default UseMemoIndex;
