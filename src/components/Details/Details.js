import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../shared/Loading/Loading';
import Current from '../Current/Current';
import Daily from '../Daily/Daily';
import { getWeather } from '../../redux/details/details.actions';
import { getDaily } from '../../redux/details/details.actions';
import dataProvider from '../../dataProviders/index';
import { useHistory } from 'react-router-dom';
import './Details.scss';

const Details = ({ loading, current, daily, getDaily, getWeather, match }) => {
	const history = useHistory();

	useEffect(() => {
		current && getDaily(current.coord);
	}, [current, getDaily]);

	useEffect(() => {
		const lon = match.params.lon;
		const lat = match.params.lat;

		if (lon && lat) {
			getWeather({ lat, lon });
		} else {
			dataProvider.geo
				.getCurrentLocation()
				.then((coord) => history.push(`/${coord.lon}/${coord.lat}`));
		}
	}, [getWeather, match, history]);

	if (loading)
		return (
			<div className='c-details c-details--loading'>
				<Loading primary size={80} />
			</div>
		);

	if (!current) {
		return (
			<div className='c-details c-details--loading'>
				<div className='c-details__no-location'>Choose location to start</div>
			</div>
		);
	}
	return (
		<div className='c-details'>
			<div className='c-details__item'>
				<Current current={current} />
			</div>
			<div className='c-details__item'>
				<Daily daily={daily} />
			</div>
		</div>
	);
};

const mapStateToProps = ({ details }) => ({
	loading: details.loading,
	current: details.current,
	daily: details.daily.list,
});

const mapDispatchToProps = (dispatch) => ({
	getDaily: (coord) => dispatch(getDaily(coord)),
	getWeather: (coord) => dispatch(getWeather(coord)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
