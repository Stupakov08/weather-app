import React from 'react';

const WeatherIcon = ({ iconId, ...rest }) => {
	return iconId ? (
		<img
			src={`http://openweathermap.org/img/w/${iconId}.png`}
			alt={iconId}
			{...rest}
		/>
	) : null;
};

export default WeatherIcon;
