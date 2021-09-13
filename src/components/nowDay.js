import React from 'react';
import {Divider, makeStyles} from "@material-ui/core";
import moment from "moment";
import {deg} from "../utils/deg";
import Swiper from "./swiper";

const useStyles = makeStyles((theme) => ({
	root: {
		background: `url('/images/sky.jpg') no-repeat`,
		backgroundPosition: 'top center',
		borderRadius: 6,
		padding: theme.spacing(3),
		color: 'white',
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
		},
	},
	title: {
		fontSize: 16,
		fontWeight: 500,
		margin: '0 0 5px 0'
	},
	time: {
		color: '#e3e3e3',
		fontSize: 14
	},
	blockWeather: {
		display: 'flex',
		padding: theme.spacing(2, 0),
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
	},
	temp: {
		fontSize: 48
	},
	img: {
		width: '36px',
		height: '36px',
		color: "white",
		margin: theme.spacing(0, 1)
	},
	feelsLike: {
		color: '#e3e3e3',
		fontSize: 14,
	},
	feelsLikeDeg: {
		color: 'white',
	},
	descr: {
		fontSize: 14,
		marginBottom: 4,
		'&::first-letter': {
			textTransform: 'capitalize',
		}
	},
	iconOther: {
		opacity: 0.7,
		width: '25px',
		height: '25px',
		marginRight: theme.spacing(0.5)
	},
	blockOther: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
	},
	blockOtherEl: {
		display: 'flex',
		alignItems: 'center',
		margin: theme.spacing(1, 2, 1, 0),
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center'
		},
		"&:last-child": {
			marginRight: 0
		}
	},
	line: {
		background: 'rgba(255,255,255,.3)',
		margin: theme.spacing(3, 0, 3, 0)
	}
}))

const NowDay = ({data, city}) => {
	const classes = useStyles()

	if (data) {
		return (
			<div className={classes.root}>
				<p className={classes.title}>{city}</p>
				<p className={classes.time}>Сейчас {moment().format("HH:mm")}</p>
				<div className={classes.blockWeather}>
					<div className={classes.temp}>
						{deg(data.main.temp)}&deg;
						<img className={classes.img} src={`/images/mini-icons/${data.weather[0].icon}.png`} alt=""/>
					</div>
					<div>
						<p className={classes.descr}>{data.weather[0].description}</p>
						<p className={classes.feelsLike}>
							Ощущается как <span className={classes.feelsLikeDeg}>{deg(data.main.feels_like)}&deg;</span>
						</p>
					</div>
				</div>
				<div className={classes.blockOther}>
					<div className={classes.blockOtherEl}>
						<img className={classes.iconOther} src="/images/mini-icons/air.png" alt=""/>
						<span>{data.wind.speed} м/с</span>
					</div>
					<div className={classes.blockOtherEl}>
						<img className={classes.iconOther} src="/images/mini-icons/humidity.png" alt=""/>
						<span>{data.main.humidity} %</span>
					</div>
					<div className={classes.blockOtherEl}>
						<img className={classes.iconOther} src="/images/mini-icons/pressure.png" alt=""/>
						<span>{Math.round(data.main.pressure / 1.333)} мм рт.ст.</span>
					</div>
				</div>
				<Divider className={classes.line} />
				<Swiper />
			</div>
		);
	}
	return null
};

export default NowDay;
