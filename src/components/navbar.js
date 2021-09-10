import React, {useEffect, useState} from 'react';
import {alpha, AppBar, Button, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'
import {useDispatch} from "react-redux";
import {getWeatherOneDay} from "../asyncActions/weatherApi";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		background: 'white',
		boxShadow: 'none',
		borderBottom: '1px solid #d2d2d2'
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: 'black'
	},
	title: {
		flexGrow: 1,
		color: 'black',
		fontWeight: 600,
		fontSize: 30,
		letterSpacing: -0.5
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.black, 0.08),
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 1),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#b3b3b3',
		right: 0
	},
	inputRoot: {
		color: '#474747',
	},
	inputInput: {
		padding: theme.spacing(1, 0, 1, 1),
		// vertical padding + font size from searchIcon
		paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},

}))

const Navbar = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const [city, setCity] = useState('')

	const coordCityHandler = (e) => {
		//e.preventDefault()
		dispatch(getWeatherOneDay(city))
	}

	useEffect(() => {
		coordCityHandler()
	}, [])

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Погода
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							value={city}
							onChange={(e) => setCity(e.target.value)}
							placeholder="Город…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<Button
						onClick={(e) => coordCityHandler(e)}
						variant="contained"
						color="primary"
						className="ml-2"
					>Найти</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
