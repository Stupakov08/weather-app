import React from 'react';
import moment from 'moment';
import WeatherIcon from '../shared/WeatherIcon';

const DailyItem = ({ item }) => {
	const {
			icon,
			temp: { min, max },
			description,
			humidity,
			pressure,
			wind,
		} = item,
		dt = moment(item.dt * 1000).format('ddd, MMM Do'),
		maxTemp = Math.round(max),
		minTemp = Math.round(min),
		sunrise = moment(item.sunrise * 1000).format('h:mm a'),
		sunset = moment(item.sunset * 1000).format('h:mm a');

	return (
		<div className='c-daily__item'>
			<div className='c-daily__mainrow'>
				<div className='c-daily__day'>{dt}</div>
				<div className='c-daily__img'>
					<WeatherIcon iconId={icon} />
				</div>
				<div className='c-daily__temp'>
					{maxTemp} / {minTemp}°С
				</div>
				<div className='c-daily__desc'>{description}</div>
			</div>
			<div className='c-daily__suprow'>
				<div>
					<span>Humidity</span> <span>{humidity}%</span>
				</div>
				<div>
					<span>Pressure</span> <span>{pressure}hPa</span>
				</div>
				<div>
					<span>Wind</span> <span>{wind}m/s</span>
				</div>
				<div>
					<span>Sunrise</span> <span>{sunrise}</span>
				</div>
				<div>
					<span>Sunset</span> <span>{sunset}</span>
				</div>
			</div>
		</div>
	);
};

export default DailyItem;
