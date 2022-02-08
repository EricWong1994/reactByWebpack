// import { Observer, useObservable } from 'mobx-react-lite';
import {
	Observer,
	useObserver,
	useLocalStore,
	useLocalObservable,
} from 'mobx-react-lite';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';

interface IType {
	name?: string;
}

// function ObservePerson:FC<IType>() {
const ObservePerson: FC<IType> = () => {
	// function ObservePerson<FC>() {
	// 类型“() => void”的参数不能赋给类型“() => IType”的参数。
	// const state = useLocalObservable<IType>(() => {
	// 		name: 'John'
	// });

	const person = useLocalObservable<IType>(() => ({ name: 'John' }));
	console.log('person: ', person);
	// const person: {name: string} = useObserver(() => {{ name: 'John' }});
	return (
		<div>
			{person.name}
			<div>{person.name}</div>
			<button onClick={() => (person.name = 'Mike')}>
				No! I am Mike
			</button>
		</div>
	);
};

ReactDOM.render(<ObservePerson />, document.querySelector('#app'));

// function ObservePerson(props) {
// 	const person: { name: string } = useLocalStore<IType>(() => {
// 		name: 'John';
// 	});
// 	// const person: {name: string} = useObserver(() => {{ name: 'John' }});
// 	return (
// 		<div>
// 			{person.name}
// 			<Observer>{() => <div>{person.name}</div>}</Observer>
// 			<button onClick={() => (person.name = 'Mike')}>
// 				No! I am Mike
// 			</button>
// 		</div>
// 	);
// }

// function ObservePerson(props) {
// 	const person: { name: string } = useLocalStore<IType>(() => {
// 		name: 'John';
// 	});
// 	// const person: {name: string} = useObserver(() => {{ name: 'John' }});
// 	return (
// 		<div>
// 			{person.name}
// 			<Observer>{() => <div>{person.name}</div>}</Observer>
// 			<button onClick={() => (person.name = 'Mike')}>
// 				No! I am Mike
// 			</button>
// 		</div>
// 	);
// }
