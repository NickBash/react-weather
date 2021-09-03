import React from 'react';
import {Container, Grid} from "@material-ui/core";
import '../styles/card.scss'
import WeatherItem from "./weatherItem";
import SimpleSlider from "./slider";

const WeatherItems = ({data}) => {
	console.log('ITEMS')
	if (Object.keys(data).length === 0) {
		return null
	}

	return (
		<Container>
				<Grid container justifyContent="center" spacing={2}>
						{data.daily.map((v, i) =>
							<Grid className='gallery-cell' key={v.sunrise} item xs={2}>
								<WeatherItem i={i} data={v} />
							</Grid>
						)}
			</Grid>
		</Container>
	);
};

export default WeatherItems;
