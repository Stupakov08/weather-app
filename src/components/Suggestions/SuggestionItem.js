import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../../redux/details/details.actions';
import { clearLocations } from '../../redux/search/search.actions';
import WeatherIcon from '../shared/WeatherIcon';
import CountryIcon from '../shared/CountryIcon';

const SuggestionItem = ({
	item: { weather, id, main, name, sys, coord },
	getWeather,
}) => {
	const temp = Math.round(main.temp);
	const itemClickHandler = () => {
		getWeather(coord);
	};
	return (
		<div className='c-suggestion__item' onClick={itemClickHandler}>
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
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	getWeather: (coords) => {
		dispatch(getWeather(coords));
		dispatch(clearLocations());
	},
});
export default connect(null, mapDispatchToProps)(SuggestionItem);
