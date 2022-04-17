import * as React from 'react';
import { observable, action, autorun, when, computed } from 'mobx';
import { observer } from 'mobx-react';
import ReactDOM from 'react-dom';
//  报错
// @types/react/index can only be default-imported using the 'allowSyntheticDefaultImports' flag
// "esModuleInterop": true, //https://issuehunt.io/r/ant-design/ant-design/issues/18273
// https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports

@observer
export default class Item extends React.Component {
	disposer: () => void;

	// 对修饰器的实验支持功能在将来的版本中可能更改。在 "tsconfig" 或 "jsconfig" 中设置 "experimentalDecorators" 选项以删除此警告。
	@observable
	count: string = 'right';

	@action
	setCount = () => {
		console.log('this.coun: ', this.count);
		this.count = this.count === 'right' ? 'wrong' : 'right';
	};

	cancelAutoRun = () => {
		if (this.disposer) {
			this.disposer();
		}
	};

	@computed
	get helloCount() {
		return `hello ${this.count}`;
	}

	render() {
		return (
			<div>
				<h3>{this.count}</h3>
				<h4>{this.helloCount}</h4>
				<button onClick={this.setCount}>click</button>
				<button onClick={this.cancelAutoRun}>cancel</button>
			</div>
		);
	}

	componentDidMount() {
		this.disposer = autorun(() => {
			console.log(this.count);
		});

		when(
			() => this.count === 'wrong',
			() => console.log(this.count)
		);
	}
}

ReactDOM.render(<Item></Item>, document.querySelector('#app'));
