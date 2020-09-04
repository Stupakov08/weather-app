import React from 'react';
import { connect } from 'react-redux';
import SuggestionItem from './SuggestionItem';
import Loading from '../shared/Loading/Loading';
import './Suggestion.scss';

const Suggestions = ({ locations, loading }) => {
	const renderSuggestion = () =>
		!!locations.length && (
			<div className='c-search__suggest c-suggestion'>
				{locations.map((i) => (
					<SuggestionItem key={i.id} item={i} />
				))}
			</div>
		);
	const renderLoading = () => (
		<div className='c-search__suggest'>
			<Loading />
		</div>
	);
	return loading ? renderLoading() : renderSuggestion();
};

const mapStateToProps = ({ search }) => ({
	locations: search.locations,
	loading: search.loading,
});

export default connect(mapStateToProps)(Suggestions);
