import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import AsyncComponent, { getData } from './test';
// const LazyComponent = React.lazy(() => import('./test'));

function Test({ rdata, age }) {
	const { name, say } = rdata;
	console.log('组件渲染');
	return (
		<div>
			<div>hello, my name is {name}</div>
			<div>age: {age}</div>
			<div>i want to say {say}</div>
		</div>
	);
}

class Index extends React.Component {
	state = {
		show: false,
	};
	LazyTest = AsyncComponent(Test, getData);

	render() {
		const { LazyTest } = this;
		const { show } = this.state;
		console.log('show: ', show);
		return (
			<div>
				<button
					onClick={() =>
						this.setState({
							show: !show,
						})
					}
				>
					点击
				</button>
				{/* { */}
				{show && (
					<Suspense fallback={<div>loading....</div>}>
						<LazyTest age={18} />
					</Suspense>
				)}
			</div>
		);
	}
}
// class AsyncComponent extends React.Component {
// 	state = {
// 		show: false,
// 	};

// 	render() {
// 		const { show } = this.state;
// 		console.log('show: ', show);
// 		return (
// 			<div>
// 				<button
// 					onClick={() =>
// 						this.setState({
// 							show: !show,
// 						})
// 					}
// 				>
// 					点击
// 				</button>
// 				{/* {show && ( */}
// 				{
// 					<Suspense fallback={<div>loading....</div>}>
// 						<LazyComponent />
// 					</Suspense>
// 				}
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<AsyncComponent />, document.querySelector('#app'));
ReactDOM.render(<Index />, document.querySelector('#app'));
