import React from 'react';
import {CircularProgress, Typography} from "@material-ui/core";
import {deg} from "../utils/deg";

const WeatherNow = ({data}) => {
	if (Object.keys(data).length === 0) {
		return <CircularProgress />
	}

	return (
		<div className="card mt-3 mb-3 mx-auto">
			<Typography className="mb-3 mt-3 text-center" variant='h4' color="textPrimary">
				Погода сейчас
			</Typography>
			<div>
				<Typography align="center" variant="h4" color="primary">
					{deg(data.main.temp)}&deg;
				</Typography>
				<Typography align="center">
					<img className='img-card img-size' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
				</Typography>
				<Typography align="center" variant="h5" color="textPrimary">
					{data.weather[0].description}
				</Typography>
				<Typography className="mt-2" align="center" variant="subtitle2" color="inherit">
					Влажность: {data.main.humidity}%
				</Typography>
			</div>
		</div>
	);
};

export default WeatherNow;
