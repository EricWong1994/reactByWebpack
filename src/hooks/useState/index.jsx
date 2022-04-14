import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import UseStateDemo from './useStateDemo';
import UseRefDemo from './useRefDemo';
import ClouseMemo from '../useMemo/clouseMemo';
export default function UseEffectIndex() {
	const [counter, setCounter] = useState(0);
	const ref = useRef(0);

	const increasement = () => {
		// setCounter(counter + 1);
		console.log('counter: ', counter);
		// setCounter(counter + 1);
		// setCounter(counter + 1);
		ref.current = 888;
		console.log('ref: ', ref);
	};
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
			UseStateIndex
			<Button onClick={() => setCounter(counter - 1)}>-</Button>
			<span>{counter}</span>
			<Button onClick={increasement}>+</Button>
			<br />
			<h3>{ref.current}</h3>
			<Child />
			<UseStateDemo />
			<UseRefDemo />
			<ClouseMemo></ClouseMemo>
		</div>
	);
}

function Child() {
	console.log('Child render');

	return (
		<div>
			<h2> Child 组件</h2>
		</div>
	);
}
