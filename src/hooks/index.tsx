import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import UseMemoIndex from './useMemo';
import UseEffectIndex from './useEffect';
import UseStateIndex from './useState';
import { getUserInfo } from '../apis/getUserInfo';

export default function HooksIndex() {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		// console.log('useEffect with no dependency');
	});

	useEffect(() => {
		// getUserInfo({ name: 'wang' }).then(res => {
		// 	console.log('res: ', res);
		// });
	}, []);
	return (
		<div>
			HooksIndex
			<Button onClick={() => setCounter(counter + 1)}>-</Button>
			<span>{counter}</span>
			<Button onClick={() => setCounter(counter + 1)}>+</Button>
			<br />
			{/* <UseMemoIndex /> */}
			{/* <UseEffectIndex /> */}
			<UseStateIndex />
			{/* <App /> */}
		</div>
	);
}
const mountNode = document.querySelector('#app');

ReactDOM.render(<HooksIndex />, mountNode);

function App() {
	const [name, setName] = useState('App');

	return (
		<div className='App'>
			<Foo />
			<button onClick={() => setName('aaa')}>{name}</button>
		</div>
	);
}

function Foo() {
	console.log('Foo render');

	return (
		<div>
			<h1> Foo </h1>
		</div>
	);
}
