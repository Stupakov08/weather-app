import React from 'react';
import { connect } from 'react-redux';
import Loading from '../shared/Loading/Loading';
import Current from '../Current/Current';
import Daily from '../Daily/Daily';
import './Details.scss';

const Details = ({ loading }) => {
	if (loading)
		return (
			<div className='c-details c-details--loading'>
				<Loading primary size={80} />
			</div>
		);

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
});

export default connect(mapStateToProps)(Details);
