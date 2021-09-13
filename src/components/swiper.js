import React from 'react';
import {Divider, makeStyles} from "@material-ui/core";
import {useSelector} from "react-redux";
import {ScrollMenu} from "react-horizontal-scrolling-menu";
import moment from "moment";
import useDrag from "../hooks/useDrag";
import {deg} from "../utils/deg";

const useStyles = makeStyles((theme) => ({
	block: {
		overflow: 'hidden',
		marginRight: -24
	},
	scroller: {
		marginBottom: -17,
	},
	container: {
		userSelect: 'none',
		display: 'flex',
		flexDirection: 'row',
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
	},
	item: {
		display: 'inline-block',
		padding: '0 9px',
		textAlign: "center"
	},
	icon: {
		width: 20,
		height: 20,
		margin: '3px 0'
	},
	time: {
		color: '#e3e3e3',
		fontSize: 14
	},
	temp: {
		fontSize: 14
	},
	line: {
		height: 60,
		margin: 'auto 5px',
		background: 'rgba(255,255,255,.3)',
	}
}))

const Swiper = () => {
	const classes = useStyles()
	const {weatherDays, statusDays} = useSelector(state => state.data)
	const {dragStart, dragStop, dragMove} = useDrag();

	const handleDrag = ({scrollContainer}) => (ev) =>
		dragMove(ev, (newPos) => {
			if (scrollContainer.current) {
				const currentScroll = scrollContainer.current.scrollLeft;
				scrollContainer.current.scrollLeft = currentScroll + newPos;
			}
		});

	if (!weatherDays.length > 0 && statusDays !== 'success') return null

	return (
		<>
			<div className={classes.block}>
				<ScrollMenu
					wrapperClassName={classes.scroller}
					onMouseDown={() => dragStart}
					onMouseUp={() => dragStop}
					onMouseMove={handleDrag}
				>
					<ul className={classes.container}>
						{
							weatherDays.hourly.map(item =>
								<div className={classes.content} key={item.dt}>
									<li className={classes.item}>
										<p className={classes.time}>{moment.unix(item.dt).format('HH:mm')}</p>
										<img className={classes.icon} src={`/images/mini-icons/${item.weather[0].icon}.png`} alt=""/>
										<p className={classes.temp}>{deg(item.temp)}&deg;</p>
									</li>
									{moment.unix(item.dt).format('HH:mm') === '23:00'
										? <Divider className={classes.line} orientation='vertical'/>
										: null}
								</div>
							)
						}
					</ul>
				</ScrollMenu>
			</div>
		</>
	);
};

export default Swiper;
