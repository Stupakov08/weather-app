import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../shared/SearchInput/SearchInput';
import ImageButton from '../shared/ImageButton/ImageButton';
import { findLocation } from '../../redux/search/search.actions';
import Suggestion from '../Suggestions/Suggestions';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Location } from '../../assets/location.svg';
import { debounce } from '../../utils/index';
import './SearchForm.scss';

const SearchForm = ({ findLocation }) => {
	const [search, setSearch] = useState('');

	const debouncedCall = useCallback(
		debounce((s) => s.length > 2 && findLocation(s), 500),
		[]
	);

	const formSubmit = (e) => {
		e.preventDefault();
		debouncedCall(search);
	};

	const inputChange = (e) => setSearch(e.target.value);

	useEffect(() => {
		debouncedCall(search);
	}, [search, debouncedCall]);

	return (
		<form action='get' className='c-paper c-search' onSubmit={formSubmit}>
			<SearchInput type='text' value={search} onChange={inputChange} />
			<ImageButton type='submit' title='Search'>
				<Search />
			</ImageButton>
			<div className='c-search__devider'></div>
			<ImageButton title='Use my location'>
				<Location />
			</ImageButton>
			<Suggestion />
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	findLocation: (s) => dispatch(findLocation(s)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
