import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../../redux/details/details.actions';
import { deleteLocation } from '../../redux/saved/saved.actions';
import CountryIcon from '../shared/CountryIcon';
import ImageButton from '../shared/ImageButton/ImageButton';
import { ReactComponent as Delete } from '../../assets/bin.svg';

const SavedItem = ({
	item: { icon, description, id, main, temp, name, country, coord },
	getWeather,
	deleteLocation,
}) => {
	temp = Math.round(temp);
	const itemClickHandler = () => {
		getWeather(coord);
	};
	const deleteClickHandler = (e) => {
		e.stopPropagation();
		deleteLocation(id);
	};
	return (
		<div className='c-saved__item' onClick={itemClickHandler}>
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
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	getWeather: (coords) => dispatch(getWeather(coords)),
	deleteLocation: (id) => dispatch(deleteLocation(id)),
});
export default connect(null, mapDispatchToProps)(SavedItem);
