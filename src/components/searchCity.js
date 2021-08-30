import React, {useRef} from 'react';
import '../styles/searchcity.scss'
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {setCity} from "../store/dataSlice";

const SearchCity = () => {
	const dispatch = useDispatch()
	const inputRef = useRef()

	return (
		<div className="flex flex-row mb-5 mt-6">
			<input
				ref={inputRef}
				className="search-city mr-2"
				type="text"/>
			<Button
				onClick={(e) => dispatch(setCity(inputRef.current.value))}
				variant="contained"
				color="primary"
			>Найти</Button>
		</div>
	);
};

export default SearchCity;
