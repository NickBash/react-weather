import React from 'react';
import WeatherItems from "../components/weatherItems";
import SearchCity from "../components/searchCity";
import {useSelector} from "react-redux";
import {Box, CircularProgress, Divider, Typography} from "@material-ui/core";
import WeatherNow from "../components/weatherNow";
import SimpleSlider from "../components/slider";

const Index = () => {
	const {city, weatherOneDay, weatherDays, status, statusDays } = useSelector(state => state.data)

	return (
		<div>
			<SearchCity />
			<Divider />
			<Typography className="mb-3 text-center mt-3" variant='h2' color="primary">
				{city}
			</Typography>
			<Typography className="mb-3 mt-3 text-center" variant='h4' color="textPrimary">
				Погода сейчас
			</Typography>
			{
				status === 'loading'
					? <CircularProgress />
					: status === 'success'
					? <WeatherNow data={weatherOneDay} />
					: <Typography align="center" variant="h5" color="textSecondary">Ничего не найдено</Typography>
			}
			<Divider />
			<Typography className="mb-3 mt-3 text-center" variant='h4' color="textPrimary">
				Погода на 7 дней
			</Typography>
			{
				statusDays === 'loading'
					? <Box mt={5} textAlign="center"><CircularProgress /></Box>
					: statusDays === 'success'
					? <WeatherItems data={weatherDays} />
					: <Typography align="center" variant="h5" color="textSecondary">Ничего не найдено</Typography>
			}
			{/*<WeatherItems data={weatherDays} />*/}
		</div>
	)
}

export default Index;
