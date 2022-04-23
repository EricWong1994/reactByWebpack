import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './features/Counter/Counter';
import TodoList from './features/TodoList/index';
import TodoListCopy from './features/TodoListCopy/index';
// import './app.less';

export default function AppRedux() {
	console.log('AppRedux - render');
	return (
		<div>
			<div className='app-test'>App-redux</div>
			{/* <Counter /> */}
			<TodoList></TodoList>
			<TodoListCopy></TodoListCopy>
			<Child></Child>
			<br></br>
		</div>
	);
}

const Child = () => {
	console.log('Child - render ');
	return (
		<div>
			<h2>Child组件</h2>
		</div>
	);
};
