import React from 'react';
import {Card, CardContent, CircularProgress, makeStyles, TableCell, TableRow, Typography} from "@material-ui/core";
import {deg} from "../utils/deg";
import moment from "moment";

const useStyles = makeStyles(({
	root: {
		maxWidth: '220px',
		border: '1px solid #d2d2d2',
		borderRadius: 4,
		padding: '5px 0'
	},
	imgCard: {
		filter: 'brightness(90%)'
	},
	table: {
		minWidth: 650
	}
}))

const WeatherItem = ({data, i}) => {
	const classes = useStyles()
	if (Object.keys(data).length === 0) {
		return <CircularProgress />
	}



	return (
		// <Card className={classes.root}>
		// 	<CardContent>
		// 		<p className="text-center mb-2 font-bold">
		// 			{moment().add(i, 'd').format("DD.MM")}
		// 		</p>
		// 		<Typography align="center" variant="subtitle2" color="primary">
		// 			{deg(Math.min(data.temp.night, data.temp.morn, data.temp.day, data.temp.eve))}&deg;
		// 			...
		// 			{deg(Math.max(data.temp.night, data.temp.morn, data.temp.day, data.temp.eve))}&deg;
		// 		</Typography>
		// 		<Typography align="center">
		// 			<img className={classes.imgCard} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
		// 		</Typography>
		// 	</CardContent>
		// </Card>
		<TableRow key={i}>
			<TableCell component="th" scope="row">
				{moment().add(i, 'd').format("DD.MM")}
			</TableCell>
			<TableCell align="right">{deg(Math.min(data.temp.night, data.temp.morn, data.temp.day, data.temp.eve))}&deg;</TableCell>
			<TableCell align="right">{deg(Math.max(data.temp.night, data.temp.morn, data.temp.day, data.temp.eve))}&deg;</TableCell>
			<TableCell align="right"><img className={classes.imgCard} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/></TableCell>
		</TableRow>
	);
};

export default WeatherItem;
