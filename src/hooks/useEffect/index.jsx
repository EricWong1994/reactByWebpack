import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import ClouseCase from './clouseCase';
export default function UseEffectIndex() {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log('useEffect with no dependency');
	});

	// const ref = useRef();
	// useEffect(() => {
	// 	if (!ref.current) {
	// 		ref.current = true;
	// 	} else {
	// 		console.log('didupdate生命周期');
	// 		// didupdate生命周期;
	// 	}
	// });
	return (
		<div>
			UseEffectIndex
			<Button onClick={() => setCounter(counter - 1)}>-</Button>
			<span>{counter}</span>
			<Button onClick={() => setCounter(counter + 1)}>+</Button>
			<br />
			{/* <LifecycleDemo /> */}
			<ClouseCase />
		</div>
	);
}
