import React from 'react';
import { connect } from 'react-redux';
import { clearLocations } from '../../redux/search/search.actions';
import WeatherIcon from '../shared/WeatherIcon';
import CountryIcon from '../shared/CountryIcon';
import { Link } from 'react-router-dom';

const SuggestionItem = ({
	item: { weather, main, name, sys, coord },
	clearLocations,
}) => {
	const temp = Math.round(main.temp);

	return (
		<Link
			className='c-suggestion__item'
			to={`/${coord.lon}/${coord.lat}`}
			onClick={clearLocations}
		>
			<WeatherIcon iconId={weather[0].icon} className='c-suggestion__img' />
			<div className='c-suggestion__description'>
				<div className='c-suggestion__city'>
					{name}, {sys.country}
					<CountryIcon
						iconId={sys.country}
						shiny
						size={16}
						className='c-suggestion__flag'
					/>
				</div>
				<div className='c-suggestion__weather'>
					<span className='c-suggestion__temp'>{temp}°C</span>
					<span className='c-suggestion__desc'>{weather[0].description}</span>
				</div>
			</div>
		</Link>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearLocations: () => dispatch(clearLocations()),
});

export default connect(null, mapDispatchToProps)(SuggestionItem);
