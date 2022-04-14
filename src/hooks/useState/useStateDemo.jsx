import React, { useState } from 'react';

export default function Demo() {
	const [like, setLike] = useState(0);

	const handleClick = () => {
		setLike(like + 1);
	};

	const getLikeValue = () => {
		setTimeout(() => {
			alert(like);
		}, 2000);
	};

	return (
		<div>
			UseStateDemo
			<button onClick={handleClick}>+</button>
			<button>{like} 👍</button>
			<button onClick={getLikeValue}>获得like值</button>
		</div>
	);
}
