import React from 'react';

function CountButton({ onClick, count }) {
	console.log('count: ', count);
	return <button onClick={onClick}>{count}</button>;
}

// const CountButton = React.memo(function CountButton({ onClick, count }) {
// 	console.log('countmemo: ', count);
// 	return <button onClick={onClick}>{count}</button>;
// });

// function DualCounter() {
// 	const [count1, setCount1] = React.useState(0);
// 	const increment1 = () => setCount1(c => c + 1);

// 	const [count2, setCount2] = React.useState(0);
// 	const increment2 = () => setCount2(c => c + 1);

// 	return (
// 		<>
// 			<CountButton count={count1} onClick={increment1} />
// 			<CountButton count={count2} onClick={increment2} />
// 			{/* <CountButton count={count2} /> */}
// 		</>
// 	);
// }

function DualCounter() {
	const [count1, setCount1] = React.useState(0);
	const increment1 = React.useCallback(() => setCount1(c => c + 1), []);

	const [count2, setCount2] = React.useState(0);
	const increment2 = React.useCallback(() => setCount2(c => c + 1), []);

	return (
		<>
			<h3>DualCounter</h3>
			<CountButton count={count1} onClick={increment1} />
			<CountButton count={count2} onClick={increment2} />
		</>
	);
}

export default DualCounter;
