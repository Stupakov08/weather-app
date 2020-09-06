import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DailyItem from './DailyItem';
import { getDaily } from '../../redux/details/details.actions';
import './Daily.scss';

const Daily = ({ list, current, getDaily }) => {
	useEffect(() => {
		current && getDaily(current.coord);
	}, [current, getDaily]);

	if (!list) return null;

	return (
		<div className='c-paper'>
			<div className='c-daily'>
				<div className='c-daily__header c-heading'>
					{list.length}-day Forecast
				</div>
				<div className='c-daily__list'>
					{list.map((item) => (
						<DailyItem key={item.dt} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ details }) => ({
	list: details.daily.list,
	current: details.current,
});
const mapDispatchToProps = (dispatch) => ({
	getDaily: (coord) => dispatch(getDaily(coord)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Daily);
