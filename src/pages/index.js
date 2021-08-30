import React from 'react';
import WeatherItems from "../components/weatherItems";
import SearchCity from "../components/searchCity";
import WeatherItem from "../components/weatherItem";
import {useSelector} from "react-redux";
import {CircularProgress, Typography} from "@material-ui/core";

const Index = () => {
	const { weatherOneDay, weatherDays, status, statusDays } = useSelector(state => state.data)

	return (
		<div>
			<SearchCity />
			<Typography className="mb-3 text-center" variant='h2' color="primary">
				{weatherOneDay.name}
			</Typography>
			{
				status === 'loading'
					? <CircularProgress />
					: status === 'success'
					? <WeatherItem data={weatherOneDay} />
					: null
			}
			{
				statusDays === 'loading'
					? <CircularProgress />
					: statusDays === 'success'
					? <WeatherItems data={weatherDays} />
					: null
			}
		</div>
	);
};

export default Index;
