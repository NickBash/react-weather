import React from 'react';
import {Container, Grid} from "@material-ui/core";
import '../styles/card.scss'
import WeatherItem from "./weatherItem";

const WeatherItems = ({data}) => {
	return (
		<Container>
			<Grid item xs={12}>
				<Grid container justifyContent="center" spacing={2}>
					{data.daily.map(v => {
						<WeatherItem
							data={v} />
					})}
				</Grid>
			</Grid>
		</Container>
	);
};

export default WeatherItems;
