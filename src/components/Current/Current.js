import React from 'react';
import WeatherIcon from '../shared/WeatherIcon';
import CountryIcon from '../shared/CountryIcon';
import moment from 'moment';
import './Current.scss';

const Current = ({ current }) => {
	if (!current) return null;

	const {
			name,
			country,
			icon,
			main,
			description,
			humidity,
			pressure,
		} = current,
		dt = moment(current.dt * 1000).format('h:mm a, dddd, Do, MMMM, YYYY '),
		sunrise = moment(current.sunrise * 1000).format('h:mm a'),
		sunset = moment(current.sunset * 1000).format('h:mm a'),
		temp = Math.round(current.temp),
		feels_like = Math.round(current.feels_like),
		speed = Math.round(current.speed),
		visibility = current.visibility / 1000;

	return (
		<div className='c-paper'>
			<div className='c-current'>
				<div className='c-current__name'>
					{name}, {country}
					<CountryIcon
						iconId={country}
						size={48}
						className='c-current__countryicon'
					/>
				</div>
				<div className='c-current__time'>{dt}</div>
				<div className='c-current__main'>
					<div className='c-current__img'>
						<WeatherIcon iconId={icon} />
					</div>
					<div className='c-current__temp'>{temp}°С</div>
				</div>
				<div className='c-current__desc'>
					Feels like: {feels_like}°С. {main}, {description}
				</div>
				<div className='c-current__addition'>
					<div>Humidity: {humidity} %</div>
					<div>Wind: {speed} m/s</div>
					<div>Pressure: {pressure} hPa</div>
					<div>Sunrise: {sunrise}</div>
					<div>Sunset: {sunset}</div>
					<div>Visibility: {visibility} km</div>
				</div>
			</div>
		</div>
	);
};

export default Current;
