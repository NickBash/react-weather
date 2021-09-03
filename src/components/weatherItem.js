import React from 'react';
import {Card, CardContent, CircularProgress, Typography} from "@material-ui/core";
import {deg} from "../utils/deg";
import moment from "moment";

const WeatherItem = ({data, i}) => {
	if (Object.keys(data).length === 0) {
		return <CircularProgress />
	}

	console.log(data)

	return (
		<Card className="card">
			<CardContent>
				<p className="text-center mb-2 font-bold">
					{moment().add(i, 'd').format("DD.MM.YYYY")}
				</p>
				<Typography align="center" variant="subtitle2" color="primary">
					Ночь: {deg(data.temp.night)}&deg;<br />
					Утро: {deg(data.temp.morn)}&deg;<br />
					День: {deg(data.temp.day)}&deg;<br />
					Вечер: {deg(data.temp.eve)}&deg;
				</Typography>
				<Typography align="center">
					<img className='img-card' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
				</Typography>
				<Typography align="center" variant="subtitle2" color="textSecondary">
					{data.weather[0].description}
				</Typography>
				<Typography className="mt-2" align="center" variant="subtitle2" color="inherit">
					Влажность: {data.humidity}%
				</Typography>
			</CardContent>
		</Card>
	);
};

export default WeatherItem;
