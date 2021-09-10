import React from 'react';
import {
	Container,
	Grid,
	makeStyles,
	Table, TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from "@material-ui/core";
import '../styles/card.scss'
import WeatherItem from "./weatherItem";

const useStyles = makeStyles(({
	table: {
		maxWidth: '650px'
	},
}))

const WeatherItems = ({data}) => {
	const classes = useStyles()
	if (Object.keys(data).length === 0) {
		return null
	}

	return (
		// <Container className='pt-5 pb-3'>
		// 	<Typography className="mb-3 mt-3 text-center" variant='h4' color="textPrimary">
		// 		Погода на 7 дней
		// 	</Typography>
		// 		<Grid container justifyContent="center" spacing={2}>
		// 				{data.daily.map((v, i) =>
		// 					<Grid className={classes.galleryCell} key={v.sunrise} item xs={2}>
		// 						<WeatherItem i={i} data={v} />
		// 					</Grid>
		// 				)}
		// 	</Grid>
		// </Container>
		<TableContainer>
			<Table className={classes.table} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align="right">Calories</TableCell>
						<TableCell align="right">Fat&nbsp;(g)</TableCell>
						<TableCell align="right">Carbs&nbsp;(g)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.daily.map((v, i) => (
						<WeatherItem i={i} data={v} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default WeatherItems;
