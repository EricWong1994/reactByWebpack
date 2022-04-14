import React, { useState, useRef } from 'react';

export default function Demo() {
	const [like, setLike] = useState(0);
	const likeRef = useRef(0);

	const handleClick = () => {
		setLike(like + 1);
		likeRef.current = likeRef.current + 1;
	};

	const getLikeValue = () => {
		setTimeout(() => {
			alert(likeRef.current);
		}, 2000);
	};

	return (
		<div>
			<h2>useRefDemo</h2>
			<button onClick={handleClick}>+</button>
			<button>{like} 👍</button>
			<button onClick={getLikeValue}>获得like值</button>
		</div>
	);
}
