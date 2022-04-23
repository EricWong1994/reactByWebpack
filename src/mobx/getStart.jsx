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

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => (
	<button onClick={() => timer.reset()}>
		Seconds passed: {timer.secondsPassed}
	</button>
));
// const TimerView = ({ timer }) => (
// 	<button onClick={() => timer.reset()}>
// 		Seconds passed: {timer.secondsPassed}
// 	</button>
// );

// ReactDOM.render(<TimerView timer={myTimer} />, document.body);
ReactDOM.render(<TimerView timer={myTimer} />, document.querySelector('#app'));
// ReactDOM.render(<div>1111</div>, document.querySelector('#app'));

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
	myTimer.increase();
}, 1000);

export default TimerView;
