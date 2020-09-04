import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findLocation } from '../../redux/search/search.actions';

const SearchForm = ({ findLocation }) => {
	const [search, setSearch] = useState('');

	const formSubmit = (e) => {
		e.preventDefault();
		findLocation(search);
	};

	return (
		<form action='get' onSubmit={formSubmit}>
			<input
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<input type='submit' />
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	findLocation: (s) => dispatch(findLocation(s)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
