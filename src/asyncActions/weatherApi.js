import {createAsyncThunk} from "@reduxjs/toolkit"
import {config} from "../config/config";
import {weatherone} from "../dataTest/weatherone";
import {weatherDays1} from "../dataTest/weather";

export const getWeatherOneDay = createAsyncThunk(
	'/', async (city) => {
		return weatherone
		return fetch(`${config.api}weather?q=${city}${config.apiParams}`)
			.then(res => res.json())
	}
)

export const getWeatherDays = createAsyncThunk(
	'/days', async ({lon, lat}) => {
		return weatherDays1
		return fetch(`${config.api}onecall?lat=${lat}&lon=${lon}${config.apiParams}`)
			.then(res => res.json())
	}
)
