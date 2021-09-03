import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, TextField} from "@material-ui/core";
import '../styles/searchcity.scss'
import {getWeatherOneDay} from "../asyncActions/weatherApi";

const SearchCity = () => {
	const dispatch = useDispatch()
	const [city, setCity] = useState('')

	const coordCityHandler = (e) => {
		e.preventDefault()
		dispatch(getWeatherOneDay(city))
	}

	return (
		<div className="flex flex-row mb-5 mt-6 justify-content-center">
			<TextField
				value={city}
				onChange={(e) => setCity(e.target.value)}
				label="Ваш город"
				variant="outlined"
			/>
			<Button
				onClick={(e) => coordCityHandler(e)}
				variant="contained"
				color="primary"
				className="ml-2"
			>Найти</Button>
		</div>
	);
};

export default SearchCity;
