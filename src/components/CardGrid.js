import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
// import Iframe from 'react-iframe';

function CardGrid({ limit }) {
	const [ card, setCard ] = useState(); // had an empty array here and changed it to empty function call and it worked.

	useEffect(
		() => {
			axios
				.get(`https://api.nasa.gov/planetary/apod?api_key=0zGanPrE1C5Aktw5EgI1QKdBHQ5lJ3t1LLZBYtOV`)
				.then((res) => {
					const cardImg = res.data.url;
					console.log('res return:', cardImg);
					setCard(cardImg);
					console.log(card);
				});
		},
		[ card ]
	);

	return (
		<div className="card-grid">
			<Card cardData={card} key={card} />
		</div>
	);
}

export default CardGrid;
