import React from 'react';
import {makeStyles} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import {DateTime} from "luxon"

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
		borderRadius: 5,
		border: '1px solid #e2e2e2',
		height: '100%',
		background: '#ffffff',
		boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
	},
	title: {
		textAlign: 'center',
		letterSpacing: 1,
		marginBottom: 30
	},
	card: {
		margin: theme.spacing(2, 0),
		padding: theme.spacing(1),
	}
}))

const Alerts = ({alerts}) => {
	const classes = useStyles()

	if (!alerts.length > 0) return null

		const Alert = (props) => {
			return <MuiAlert elevation={6} variant="filled" {...props} />;
		}

	const alertsData = []

	alerts.forEach((item, i) => {
		if (i % 2 !== 0) alertsData.push(item)
	})

	return (
		<div className={classes.root}>
			<h3 className={classes.title}>Предупреждения!</h3>
			{alertsData.map((item, i) =>
				<Alert className={classes.card} key={i} severity="warning">
					{item.event} {DateTime.fromSeconds(item.start).toFormat('dd.MM.yyyy HH:mm')} - {DateTime.fromSeconds(item.end).toFormat('dd.MM.yyyy HH:mm')}
				</Alert>
			)}
		</div>
	);
}

export default Alerts;
