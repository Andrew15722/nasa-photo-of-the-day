import React from 'react';

function Card({ imgUrl }) {
	return (
		<div className="card">
			<img src={imgUrl} />
		</div>
	);
}

export default Card;
