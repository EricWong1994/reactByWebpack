import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import DualCounter from './DualCounter';
import DependenciesLists from './DependenciesLists';

export default function HooksIndex() {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			HooksIndex
			<Button onClick={() => setCounter(counter + 1)}>-</Button>
			<span>{counter}</span>
			<Button onClick={() => setCounter(counter + 1)}>+</Button>
			<br />
			<DualCounter />
			<DependenciesLists />
		</div>
	);
}
const mountNode = document.querySelector('#app');

ReactDOM.render(<HooksIndex />, mountNode);
