import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../shared/SearchInput/SearchInput';
import ImageButton from '../shared/ImageButton/ImageButton';
import {
	findLocation,
	clearLocations,
} from '../../redux/search/search.actions';
import { getWeather } from '../../redux/details/details.actions';
import Suggestion from '../Suggestions/Suggestions';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Location } from '../../assets/location.svg';
import { debounce } from '../../utils/index';
import dataProvider from '../../dataProviders';
import './SearchForm.scss';

const SearchForm = ({ findLocation, clearLocations, getWeather }) => {
	const [search, setSearch] = useState('');

	const inputChange = (e) => setSearch(e.target.value);

	const debouncedCall = useCallback(
		debounce((s) => s.length > 2 && findLocation(s), 500),
		[]
	);

	const formSubmit = (e) => {
		e.preventDefault();
		debouncedCall(search);
	};

	const useCurrentLocationHandler = () => {
		dataProvider.geo
			.getCurrentLocation()
			.then(getWeather)
			.catch((res) => {
				alert(res.message);
			});
	};

	useEffect(() => {
		debouncedCall(search);
		if (!search) clearLocations();
	}, [search, debouncedCall, clearLocations]);

	return (
		<form action='get' className='c-paper c-search' onSubmit={formSubmit}>
			<SearchInput type='text' value={search} onChange={inputChange} />
			<ImageButton type='submit' title='Search'>
				<Search />
			</ImageButton>
			<div className='c-search__devider'></div>
			<ImageButton title='Use my location' onClick={useCurrentLocationHandler}>
				<Location />
			</ImageButton>
			<Suggestion />
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	findLocation: (s) => dispatch(findLocation(s)),
	clearLocations: () => dispatch(clearLocations()),
	getWeather: (coords) => {
		dispatch(getWeather(coords));
		dispatch(clearLocations());
	},
});

export default connect(null, mapDispatchToProps)(SearchForm);
