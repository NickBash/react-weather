import {createAsyncThunk} from "@reduxjs/toolkit"
import {config} from "../config/config";

export const getWeatherOneDay = createAsyncThunk(
	'/', async (city) => {
		return fetch(`${config.api}weather?q=${city}${config.apiParams}`)
			.then(res => res.json())
	}
)

export const getWeatherDays = createAsyncThunk(
	'/days', async ({lon, lat}) => {
		return fetch(`${config.api}onecall?lat=${lat}&lon=${lon}${config.apiParams}`)
			.then(res => res.json())
	}
)
