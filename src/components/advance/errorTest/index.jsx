import React from 'react';
import ReactDOM from 'react-dom';

function ErrorTest() {
	return;
}
function Test() {
	return <div>let us learn React!</div>;
}

class Index extends React.Component {
	state = {
		hasError: false,
	};
	componentDidCatch(...arg) {
		console.log(arg);
		// this.setState({
		// 	/* 降级UI */
		// 	hasError: true,
		// });
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	render() {
		const { hasError } = this.state;
		return (
			<div>
				{hasError ? <div>组件出现错误</div> : <ErrorTest />}
				<div> hello, my name is alien! </div>
				<Test />
			</div>
		);
	}
}

ReactDOM.render(<Index />, document.querySelector('#app'));
