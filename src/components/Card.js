import React from 'react';

function Card({ cardData }) {
	return (
		<div className="card">
			<img src={cardData} />
		</div>
	);
}

export default Card;
