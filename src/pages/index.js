import React from 'react';
import {useSelector} from "react-redux";
import {CircularProgress, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Navbar from "../components/navbar";
import NowDay from "../components/nowDay";
import Alerts from "../components/alerts";
import TableWeather from "../components/tableWeather";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: theme.spacing(3),
	},
	card: {},
	notFound: {
		marginTop: 20
	},
	progress: {
		textAlign: 'center',
		marginTop: 70,
		fontSize: 30
	}
}))

const Index = () => {
	const classes = useStyles()
	const {city, weatherOneDay, weatherDays, status, statusDays} = useSelector(state => state.data)

	if (weatherOneDay.message) {
		return (
			<>
				<Navbar/>
				<div className={classes.progress}>Ошибка при поиске вашего города</div>
			</>
		)
	}

	return (
		<div>
			<Navbar/>
			<Container>
			{status === 'loading'
				? <div className={classes.progress}><CircularProgress/></div>
				: status === 'success'
					?
					<>
							<Grid container className={classes.root} spacing={2}>
								<Grid className={classes.card} xs={12} sm={8} md={6} xl={6} item>
									<NowDay data={weatherOneDay} city={city}/>
								</Grid>
								{statusDays === 'success'
									?
									<Grid className={classes.card} xs={12} sm={4} md={6} xl={6} item>
										<Alerts alerts={weatherDays.alerts}/>
									</Grid>
									: statusDays === 'loading'
										? <Grid className={classes.card} xs={12} sm={4} md={6} xl={6} item>
										<div className={classes.progress}><CircularProgress/></div>
									</Grid>
										: null
								}
							</Grid>

						{statusDays === 'success'
							? weatherDays.daily.map(day =>
									<TableWeather key={day.dt} day={day} />
								)
							: <div className={classes.progress}><CircularProgress/></div>
						}
					</>
					: <Typography className={classes.notFound} align="center" variant="h5" color="textSecondary">Ничего не найдено</Typography>
			}
			</Container>
		</div>
	)
}

export default Index
