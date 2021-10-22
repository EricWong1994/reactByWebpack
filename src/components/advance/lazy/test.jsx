import React, { Suspense, useState } from 'react';

// function GetData() {
// 	const [data, setData] = useState();
// 	setTimeout(() => {
// 		setData('test');
// 	}, 2000);
// 	return <div>{data}</div>;
// }

// export default GetData;

export const getData = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				name: 'Lily',
				say: 'let us learn React',
			});
		}, 1500);
	});
};

function AsyncComponent(Component, api) {
	const AsyncComponentPromise = () =>
		new Promise(async resolve => {
			const data = await api();
			resolve({
				default: props => <Component rdata={data} {...props} />,
			});
		});
	return React.lazy(AsyncComponentPromise);
}
export default AsyncComponent;
