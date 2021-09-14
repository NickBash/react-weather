import React from 'react';
import {makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {deg} from "../utils/deg";
import {DateTime} from "luxon"
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 0),
		padding: '12px 24px',
		background: '#ffffff',
		borderRadius: 5,
		boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
	},
	table: {
		marginTop: 15,
		textAlign: 'left',
	},
	textSecondary: {
		color: '#939cb1',
		fontWeight: 400,
		fontSize: 12,
		letterSpacing: -0.1
	},
	dayOff: {
		color: '#f66048',
	},
	weekDay: {
		color: '#000000'
	},
	number: {
		fontSize: 56,
		letterSpacing: -5,
		marginRight: 16,
		fontWeight: 400,
	},
	dateOther: {
		display: 'inline-block',
		fontSize: 14,
		fontWeight: 400,
	},
	tableCell: {
		borderBottom: '0px',
		fontWeight: 500,
		fontSize: 16
	},
	cellBottom: {
		borderTop: '1px solid #e5e5e5',
		borderBottom: '0px',
		padding: '10px 16px'
	},
	temp: {
		color: '#000000',
		fontSize: 16,
		marginTop: 4
	},
	blockWeather: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'nowrap'
	},
	iconWeather: {
		width: 50,
		height: 50,
		marginRight: 10
	},
	descrWeather: {
		fontWeight: 400,
		'&::first-letter': {
			textTransform: 'capitalize',
		}
	}
}))

const TableWeather = ({day}) => {
	const classes = useStyles()

	const date = DateTime.fromSeconds(day.dt).setLocale("ru")

	const itemBottom = () =>
		<div className={classes.cellBottom}>
			<span className={classes.textSecondary}>УФ-индекс {day.uvi}</span>
		</div>

	const itemTable = (timeOfDay, temp, feelsLike) =>
		<TableRow>
			<TableCell className={classes.tableCell} align="left">
				<p className={classes.textSecondary}>{timeOfDay}</p>
				<p className={classes.temp}>{deg(temp)}&deg;</p>
			</TableCell>
			<TableCell className={classes.tableCell} align="left">
				<div className={classes.blockWeather}>
					<img className={classes.iconWeather} src={`/images/icons/${day.weather[0].icon}.png`} alt=""/>
					<span className={classes.descrWeather}>{day.weather[0].description}</span>
				</div>
			</TableCell>
			<TableCell className={classes.tableCell} align="left">
				{Math.round(day.pressure / 1.333)}
			</TableCell>
			<TableCell className={classes.tableCell} align="left">{day.humidity}%</TableCell>
			<TableCell className={classes.tableCell} align="left">{day.wind_speed}</TableCell>
			<TableCell className={classes.tableCell} align="left">{deg(feelsLike)}&deg;</TableCell>
		</TableRow>

	return (
		<div className={classes.root}>
			<TableContainer>
				<Table className={classes.table} size="medium" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell
								align="left"
								className={clsx(classes.blockWeather, {
									[classes.dayOff]: date.toFormat('cccc') === 'суббота' || date.toFormat('cccc') === 'воскресенье',
								})}
							>
								<strong className={classes.number}>
									{date.toFormat('dd')}
								</strong>
								<div className={classes.dateOther}>
									<p>{date.toFormat('MMMM')},</p>
									<p>{date.toFormat('cccc')}</p>
								</div>
							</TableCell>
							<TableCell align="left"/>
							<TableCell className={classes.textSecondary} align="left">Давление, мм рт.ст.</TableCell>
							<TableCell className={classes.textSecondary} align="left">Влажность</TableCell>
							<TableCell className={classes.textSecondary} align="left">Ветер, м/с</TableCell>
							<TableCell className={classes.textSecondary} align="left">Ощущается как</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{itemTable('Утром', day.temp.eve, day.feels_like.eve)}
						{itemTable('Днем', day.temp.day, day.feels_like.day)}
						{itemTable('Вечером', day.temp.morn, day.feels_like.morn)}
						{itemTable('Ночью', day.temp.night, day.feels_like.night)}
					</TableBody>
				</Table>
				{itemBottom()}
			</TableContainer>
		</div>
	);
};

export default TableWeather;
