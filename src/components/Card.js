import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; // added the styles that were missing.

function NasaCard({ nasaCardImg, nasaCardP, nasaCardDate }) {
	return (
		<Card>
			<Card.Meta>
				<span className="date">{nasaCardDate}</span>
			</Card.Meta>

			<Card.Content>
				<Image width={'1000px'} height={'500px'} src={nasaCardImg} wrapped ui={false} />
				<Card.Header>{nasaCardP}</Card.Header>
			</Card.Content>
		</Card>
	);
}

export default NasaCard;
