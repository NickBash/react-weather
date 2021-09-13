import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
		borderRadius: 5,
		border: '1px solid #e2e2e2',
		height: '100%',
		background: '#ffffff'
	},
	title: {
		color: '#e70707',
		textAlign: 'center',
		letterSpacing: 1,
		marginBottom: 30
	},
	card: {
		margin: theme.spacing(2, 0),
		padding: theme.spacing(1),
		fontWeight: 500,
		border: '1px solid #bdbdbd'
	}
}))

const Alerts = ({alerts}) => {
	const classes = useStyles()

	if (!alerts.length > 0) return null

	const alertsData = []

	alerts.forEach((item, i) => {
		if (i % 2 !== 0) alertsData.push(item)
	})

	return (
		<div className={classes.root}>
			<h3 className={classes.title}>Предупреждения!</h3>
			{alertsData.map((item, i) =>
				<Alert className={classes.card} key={i} severity="error">
					{item.event}
				</Alert>
			)}
		</div>
	);
}
;

export default Alerts;
