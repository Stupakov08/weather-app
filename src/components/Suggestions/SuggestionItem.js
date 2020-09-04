import React from 'react';
import WeatherIcon from '../shared/WeatherIcon';

const SuggestionItem = ({ item: { weather, id, main, name, sys } }) => {
	const temp = Math.round(main.temp);
	return (
		<div className='c-suggestion__item'>
			<WeatherIcon iconId={weather[0].icon} />
			<div className='c-suggestion__description'>
				<div className='c-suggestion__city'>
					{name}, {sys.country}
				</div>
				<div className='c-suggestion__weather'>
					<span className='c-suggestion__temp'>{temp}°C</span>
					<span className='c-suggestion__desc'>{weather[0].description}</span>
				</div>
			</div>
		</div>
	);
};

export default SuggestionItem;
