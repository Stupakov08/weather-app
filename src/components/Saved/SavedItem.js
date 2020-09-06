import React from 'react';
import { connect } from 'react-redux';
import { deleteLocation } from '../../redux/saved/saved.actions';
import CountryIcon from '../shared/CountryIcon';
import ImageButton from '../shared/ImageButton/ImageButton';
import { Link } from 'react-router-dom';
import { ReactComponent as Delete } from '../../assets/bin.svg';

const SavedItem = ({
	item: { id, temp, name, country, coord },
	deleteLocation,
}) => {
	const deleteClickHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		deleteLocation(id);
	};

	return (
		<Link to={`/${coord.lon}/${coord.lat}`} className='c-saved__item'>
			<div className='c-saved__description'>
				<div className='c-saved__city'>
					{name}, {country}
					<CountryIcon
						iconId={country}
						shiny
						size={16}
						className='c-saved__flag'
					/>
				</div>
			</div>
			<ImageButton
				className='c-saved__deletebutton'
				onClick={deleteClickHandler}
			>
				<Delete />
			</ImageButton>
		</Link>
	);
};
const mapDispatchToProps = (dispatch) => ({
	deleteLocation: (id) => dispatch(deleteLocation(id)),
});
export default connect(null, mapDispatchToProps)(SavedItem);
