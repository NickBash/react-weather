import {useCallback, useState} from "react";

export default function useDrag() {
	const [clicked, setClicked] = useState(false);
	const [dragging, setDragging] = useState(false);
	const [position, setPosition] = useState(0);
	const [diff, setDiff] = useState(0);

	const dragStart = useCallback((ev) => {
		setPosition(ev.clientX);
		setDiff(0);
		setClicked(true);
	}, []);

	const dragStop = useCallback(
		() =>
			window.requestAnimationFrame(() => {
				setDragging(false);
				setClicked(false);
			}),
		[]
	);

	const dragMove = useCallback(
		(ev, cb) => {
			const newDiff = position - ev.clientX;

			const movedEnough = Math.abs(newDiff) > 5;

			if (clicked && movedEnough) {
				setDragging(true);
			}

			if (dragging && movedEnough) {
				setPosition(ev.clientX);
				setDiff(newDiff);
				cb(newDiff);
			}
		},
		[clicked, dragging, position]
	);

	return {
		dragStart,
		dragStop,
		dragMove,
		diff,
		dragging,
		position,
		setDragging,
		setDiff,
		setPosition
	};
}
