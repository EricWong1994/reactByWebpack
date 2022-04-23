import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

// Model the application state.
class Timer {
	secondsPassed = 0;

	constructor() {
		makeAutoObservable(this);
	}

	increase() {
		this.secondsPassed += 1;
	}

	reset() {
		this.secondsPassed = 0;
	}
}

const myTimer = new Timer();
// const TimerView = ({ timer }) => (
// 	<button onClick={() => timer.reset()}>
// 		Seconds passed: {timer.secondsPassed}
// 	</button>
// );
// Build a "user interface" that uses the observable state.
// const TimerView = observer(({ timer }) => (
// 	<button onClick={() => timer.reset()}>
// 		Seconds passed: {timer.secondsPassed}
// 	</button>
// ));
@observer
class TimerView extends React.Component {
	render() {
		return (
			<div>
				<h2>GETSTART MOBX</h2>
				{this.props.timer.secondsPassed}
			</div>
		);
	}
}

setInterval(() => {
	myTimer.increase();
}, 1000);

// ReactDOM.render(<TimerView timer={myTimer} />, document.body);
ReactDOM.render(<TimerView timer={myTimer} />, document.querySelector('#app'));

export default TimerView;
