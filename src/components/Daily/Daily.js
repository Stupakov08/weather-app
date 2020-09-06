import React from 'react';
import DailyItem from './DailyItem';
import './Daily.scss';

const Daily = ({ daily }) => {
	if (!daily) return null;

	return (
		<div className='c-paper'>
			<div className='c-daily'>
				<div className='c-daily__header c-heading'>
					{daily.length}-day Forecast
				</div>
				<div className='c-daily__list'>
					{daily.map((item) => (
						<DailyItem key={item.dt} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Daily;
