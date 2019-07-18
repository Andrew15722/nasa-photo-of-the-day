import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaCard from './Card';
// import Iframe from 'react-iframe';

function CardGrid() {
	const [ card, setCard ] = useState([]); // had an empty array here and changed it to empty function call and it worked.
	const [ cardImg, setCardImg ] = useState();
	const [ cardDate, setCardDate ] = useState();
	const [ cardP, setCardP ] = useState();

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=0zGanPrE1C5Aktw5EgI1QKdBHQ5lJ3t1LLZBYtOV`)
			.then((res) => {
				const cardData = res.data;
				console.log('res return:', cardData);
				setCard(card.push(cardData)); //  pushing the data to an empty array in the state.
				setCardDate(card[0].date);
				setCardImg(card[0].url);
				setCardP(card[0].explanation);
			});
	}, []);

	return (
		<div className="card-grid">
			<NasaCard key={cardImg} nasaCardImg={cardImg} nasaCardP={cardP} nasaCardDate={cardDate} />
		</div>
	);
}

export default CardGrid;

// Need to come back and add functionallity for loading and video
