import React from 'react';

const WeatherIcon = ({ iconId }) => {
	return (
		iconId && (
			<img src={`http://openweathermap.org/img/w/${iconId}.png`} alt={iconId} />
		)
	);
};

export default WeatherIcon;
