import React, { useState, useEffect } from 'react';
import Card from './Card';

function CardGrid({ limit }) {
	const [ card, setCard ] = useState([]);

	useEffect(() => {});

	return (
		<div className="card-grid">
			{card.map((dataUrl) => {
				return <Card imgUrl={dataUrl} />;
			})}
		</div>
	);
}

export default CardGrid;
