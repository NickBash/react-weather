import React from 'react';
import WeatherItems from "../components/weatherItems";
import {useSelector} from "react-redux";
import {Box, CircularProgress, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import WeatherNow from "../components/weatherNow";
import Navbar from "../components/navbar";
import NowDay from "../components/nowDay";

const useStyles = makeStyles((theme) => ({
	root: {
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
			{status === 'loading'
				? <CircularProgress/>
				: status === 'success'
					? <Container className={classes.root}>
						<Grid className={classes.card} xs={12} sm={8} md={6} xl={6} item>
							<NowDay data={weatherOneDay} city={city}/>
						</Grid>
					</Container>
					: <Typography align="center" variant="h5" color="textSecondary">Ничего не найдено</Typography>
			}
		</div>
	)
}

export default Index;
