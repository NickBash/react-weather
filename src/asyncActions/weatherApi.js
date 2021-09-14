import {createAsyncThunk} from "@reduxjs/toolkit"
import {config} from "../config/config";
// eslint-disable-next-line no-unused-vars
import {weatherone} from "../dataTest/weatherone";
// eslint-disable-next-line no-unused-vars
import {weatherDays1} from "../dataTest/weather";

export const getWeatherOneDay = createAsyncThunk(
	'/', async (city) => {
		//return weatherone
		// eslint-disable-next-line no-unreachable, no-unused-vars
		return fetch(`${config.api}weather?q=${city}${config.apiParams}`)
			.then(res => res.json())
	}
)

export const getWeatherDays = createAsyncThunk(
	'/days', async ({lon, lat}) => {
		//return weatherDays1
		// eslint-disable-next-line no-unreachable, no-unused-vars
		return fetch(`${config.api}onecall?lat=${lat}&lon=${lon}${config.apiParams}`)
			.then(res => res.json())
	}
)
