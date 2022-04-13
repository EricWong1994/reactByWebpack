import React, { Component } from 'react';
import { Button } from 'antd';

class LifecycleDemo extends Component {
	constructor(props) {
		super(props); // 否则拿不到this
		this.state = {
			count: 0,
		};
	}
	setCounter = () => {
		this.setState((state, props) => {
			return {
				count: state.count + 1,
			};
		});
	};

	componentDidUpdate() {
		console.log('componentDidUpdate: ');
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				LifecycleDemo
				{/* <Button onClick={() => setCounter(counter  1)}>-</Button> */}
				<span>{count}</span>
				<Button onClick={this.setCounter}>+</Button>
				<br />
			</div>
		);
	}
}

export default LifecycleDemo;
