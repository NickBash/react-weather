import {createSlice} from "@reduxjs/toolkit";
import {getWeatherDays, getWeatherOneDay} from "../asyncActions/weatherApi";

const dataSlice = createSlice({
	name: 'data',
	initialState: {
		weatherOneDay: {},
		weatherDays: {},
		status: null,
		statusDays: null,
		city: '',
		coord: {}
	},
	reducers: {
		setCity(state, {payload}) {
			state.city = payload
		},
		setCity1(state, {payload}) {
			state.city = payload
		},
	},
	extraReducers: {
		[getWeatherOneDay.pending]: (state, action) => {
			state.status = 'loading'
		},
		[getWeatherOneDay.fulfilled]: (state, {payload}) => {
			state.coord = payload.coord
			state.city = payload.name
			state.weatherOneDay = payload
			state.status = 'success'
		},
		[getWeatherOneDay.rejected]: (state, action) => {
			state.status = 'failed'
		},
		[getWeatherDays.pending]: (state, action) => {
			state.statusDays = 'loading'
		},
		[getWeatherDays.fulfilled]: (state, {payload}) => {
			state.weatherDays = payload
			state.statusDays = 'success'
		},
		[getWeatherDays.rejected]: (state, action) => {
			state.statusDays = 'failed'
		},
	},
})

export const {setCity, setCity1} = dataSlice.actions
export default dataSlice.reducer
