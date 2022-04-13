import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSetState } from 'react-use';

function fetchData(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				name: '李白',
				age: '99',
			});
		}, time);
	});
}
function fetchApi(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Math.random() + 1);
		}, time);
	});
}

const Demo = () => {
	//   const [state, setState] = useSetState({});

	//   useEffect(() => {
	//     fetchApi(300).then(() => {
	//       setState({
	//         hello: "world"
	//       });
	//     });
	//     fetchApi(1000).then(() => {
	//       setState({
	//         foo: "bar"
	//       });
	//     });
	//   }, []);

	//   const [state, setState] = useState({ name: '初始name', age: 10, count: 0 })
	//   console.log('state', state)
	//   useEffect(() => {
	//     fetchData().then((data) => {
	//       // some operate for data
	//       setState({
	//         ...state,
	//         name: data.name,
	//         age: data.age
	//       })
	//     })
	//     fetchApi().then((count) => {
	//       setState({
	//         ...state,
	//         count: count
	//       })
	//     })
	//   }, [])

	const [state, setState] = useState({ name: '初始name', age: 10, count: 0 });
	console.log('state', state);
	useEffect(() => {
		fetchData().then(data => {
			// some operate for data
			setState(preState => {
				return {
					...preState,
					name: data.name,
					age: data.age,
				};
			});
		});
		fetchApi().then(count => {
			setState(preState => {
				return {
					...preState,
					count: count,
				};
			});
		});
	}, []);

	return (
		<div>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
};

function App() {
	return <Demo />;
}
export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// 闭包问题
// https://www.jianshu.com/p/a5ac3e9d204e
// react-use：
// https://github.com/streamich/react-use
