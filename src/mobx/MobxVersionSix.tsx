import * as React from 'react';
import {
	observable,
	action,
	autorun,
	when,
	computed,
	makeObservable,
} from 'mobx';
import { observer } from 'mobx-react';
import ReactDOM from 'react-dom';

//  报错
// @types/react/index can only be default-imported using the 'allowSyntheticDefaultImports' flag
// "esModuleInterop": true, //https://issuehunt.io/r/ant-design/ant-design/issues/18273
// https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports

@observer
class MobxIndex extends React.Component {
	disposer: () => void;

	// 对修饰器的实验支持功能在将来的版本中可能更改。在 "tsconfig" 或 "jsconfig" 中设置 "experimentalDecorators" 选项以删除此警告。
	@observable
	count = 'right';

	@observable myCount = 0;

	constructor(props: any) {
		super(props);
		makeObservable(this); //mbox 6后需要添加这个组件才会更新
		// this.loadding=true;
	}

	// @action 6版本可去掉
	setCount = () => {
		console.log('action --- this.count: ', this.count);
		this.count = this.count === 'right' ? 'wrong' : 'right';
	};

	cancelAutoRun = () => {
		if (this.disposer) {
			this.disposer();
		}
	};

	// @computed 6版本可去掉
	get helloCount() {
		return `hello ${this.count}`;
	}

	addHandler = () => {
		this.myCount++;
	};

	render() {
		return (
			<div>
				<h2>MobxIndex</h2>
				<h3>{this.count}</h3>
				<h4>{this.helloCount}</h4>
				<button onClick={this.setCount}>click</button>
				<button onClick={this.cancelAutoRun}>cancel</button>

				<h4>{this.myCount}</h4>
				<button onClick={this.addHandler}>+</button>
			</div>
		);
	}

	componentDidMount() {
		this.disposer = autorun(() => {
			console.log('autorun --- this.count', this.count);
		});

		when(
			() => this.count === 'wrong',
			() => console.log('when --- this.count', this.count)
		);
	}
}

// decorate(Item, {
// 	start: observable,
// 	current: observable,
// 	elapsedTime: computed,
// 	tick: action,
// });
// export default MobxIndex;

ReactDOM.render(<MobxIndex />, document.querySelector('#app'));
