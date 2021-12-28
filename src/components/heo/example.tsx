import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// issue useMethods没有像createContainer一样输入一个字母就联想出来
import { createContainer, useFunction, useMethods } from 'heo';
function useCounter() {
	const [count, setCount] = useState(0);
	const methods = useMethods({
		increment() {
			setCount(count + 1);
		},
		decrement() {
			setCount(count - 1);
		},
	});

	return { count, methods };
}

const CounterContainer = createContainer(useCounter);

function CounterDisplay() {
	const { count, methods } = CounterContainer.usePicker(['count', 'methods']);
	// const { value, onChange } = CustomContainer.usePicker(['value', 'onChange']);
	return (
		<div>
			{count}
			<button type='button' onClick={methods.increment}>
				add +
			</button>
			<button type='button' onClick={methods.decrement}>
				Minus -
			</button>
			{/* <input type='text' onInput={onChange} value={value} /> */}
		</div>
	);
}

function useCustomHook() {
	// todo 官网readme写错别字了
	const [value, setValue] = useState();
	const onChange = useFunction(e => {
		console.log('e.currentTarget.value: ', e.currentTarget.value);
		setValue(e.currentTarget.value);
	});
	return {
		value,
		onChange,
	};
}
const CustomContainer = createContainer(useCustomHook);

function CustomDisplay() {
	const { value, onChange } = CustomContainer.usePicker([
		'value',
		'onChange',
	]);
	return (
		<div>
			{/* <input type='text' onInput={onChange} value={value} /> */}
			{/* Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components */}

			<input type='text' onInput={onChange} />
		</div>
	);
}

export default function Example() {
	return (
		<div>
			heo
			<CounterContainer.Provider>
				<CounterDisplay />
			</CounterContainer.Provider>
			<CustomContainer.Provider>
				<CustomDisplay />
			</CustomContainer.Provider>
		</div>
	);
}

ReactDOM.render(<Example />, document.querySelector('#app'));
