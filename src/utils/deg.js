export const deg = (deg) => {
	const result = Math.round(deg)
	return result > 0 ? `+${result}` : result
}
