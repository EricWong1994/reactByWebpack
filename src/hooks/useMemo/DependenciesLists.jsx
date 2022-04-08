import React, { useState } from 'react';

// function Foo({ bar, baz }) {
// 	const options = { bar, baz };
// 	React.useEffect(() => {
// 		// buzz(options);
// 		console.log('buzz(options);: ', options);
// 	}, [options]); // we want this to re-run if bar or baz change
// 	return <div>foobar</div>;
// }

// function Blub() {
// 	return <Foo bar='bar value' baz={3} />;
// }

// option 1
// function Foo({ bar, baz }) {
// 	console.log('Foo: ');
// 	React.useEffect(() => {
// 		const options = { bar, baz };
// 		// buzz(options);
// 		console.log('buzz(option 1);: ', options);
// 	}, [bar, baz]); // we want this to re-run if bar or baz change
// 	return <div>foobar</div>;
// }

// function Blub() {
// 	const bar = () => {};
// 	const baz = [1, 2, 3];
// 	return <Foo bar={bar} baz={baz} />;
// }

// option 2
function Foo({ bar, baz }) {
	console.log('Foo: ');
	React.useEffect(() => {
		const options = { bar, baz };
		// buzz(options);
		console.log('buzz(option 1);: ', options);
	}, [bar, baz]); // we want this to re-run if bar or baz change
	return <div>foobar</div>;
}

function Blub() {
	const bar = React.useCallback(() => {}, []);
	const baz = React.useMemo(() => [1, 2, 3], []);
	return <Foo bar={bar} baz={baz} />;
}
export default Blub;
