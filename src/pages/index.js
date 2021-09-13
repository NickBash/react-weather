import React from 'react';
import WeatherItems from "../components/weatherItems";
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
	card: {}
}))

const Index = () => {
	const classes = useStyles()
	const {city, weatherOneDay, weatherDays, status, statusDays} = useSelector(state => state.data)

	return (
		// <div>
		// 	<SearchCity />
		// 	<Typography className="mb-3 text-center mt-3" variant='h2' color="primary">
		// 		{city}
		// 	</Typography>
		// 	{
		// 		status === 'loading'
		// 			? <CircularProgress />
		// 			: status === 'success'
		// 			? <WeatherNow data={weatherOneDay} />
		// 			: <Typography align="center" variant="h5" color="textSecondary">Ничего не найдено</Typography>
		// 	}
		// 	{
		// 		statusDays === 'loading'
		// 			? <Box mt={5} textAlign="center"><CircularProgress /></Box>
		// 			: statusDays === 'success'
		// 			? <WeatherItems data={weatherDays} />
		// 			: null
		// 	}
		// 	{/*<WeatherItems data={weatherDays} />*/}
		// </div>

		<div>
			<Navbar/>
			<Container>
			{status === 'loading'
				? <CircularProgress/>
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
									: null
								}
							</Grid>

						{statusDays === 'success'
							? weatherDays.daily.map(day =>
									<TableWeather key={day.dt} day={day} />
								)
							: null
						}
					</>
					: <Typography align="center" variant="h5" color="textSecondary">Ничего не найдено</Typography>
			}
			</Container>
		</div>
	)
}

export default Index
