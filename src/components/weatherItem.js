import React from 'react';
import {Card, CardContent, CircularProgress, Typography} from "@material-ui/core";
import {deg} from "../utils/deg";

const WeatherItem = ({data}) => {
	if (Object.keys(data).length === 0) {
		return <CircularProgress />
	}

	return (
		<Card className="card">
			<CardContent>
				<Typography align="center" variant="h4" color="primary">
					{deg(data.main.temp)}&deg; C
				</Typography>
				<Typography align="center">
					<img className='img-card' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
				</Typography>
				<Typography align="center" variant="subtitle2" color="textSecondary">
					{data.weather[0].description}
				</Typography>
				<Typography className="mt-2" align="center" variant="subtitle2" color="inherit">
					Влажность: {data.main.humidity}%
				</Typography>
			</CardContent>
		</Card>
	);
};

export default WeatherItem;
