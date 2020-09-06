import React from 'react';
import { connect } from 'react-redux';
import Loading from '../shared/Loading/Loading';
import Current from '../Current/Current';
import Daily from '../Daily/Daily';
import './Details.scss';

const Details = ({ loading, current }) => {
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
				<Current />
			</div>
			<div className='c-details__item'>
				<Daily />
			</div>
		</div>
	);
};

const mapStateToProps = ({ details }) => ({
	loading: details.loading,
	current: details.current,
});

export default connect(mapStateToProps)(Details);
