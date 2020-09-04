import React from 'react';

const WeatherIcon = (iconId) => {
	return (
		<img src={`http://openweathermap.org/img/w/${iconId}.png`} alt={iconId} />
	);
};

export default WeatherIcon;
