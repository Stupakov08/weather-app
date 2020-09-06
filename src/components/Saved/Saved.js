import React from 'react';
import { connect } from 'react-redux';
import ImageButton from '../shared/ImageButton/ImageButton';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { saveCurrentLocation } from '../../redux/saved/saved.actions';
import SavedItem from './SavedItem';
import './Saved.scss';

const Saved = ({ saveLocation, list }) => {
	return (
		<div className='c-saved'>
			<div className='c-saved__header c-heading'>
				Saved Locations
				<ImageButton onClick={saveLocation} title='Save current location'>
					<Plus />
				</ImageButton>
			</div>
			{list && (
				<div className='c-paper c-saved__list'>
					{list.map((i) => (
						<SavedItem item={i} />
					))}
				</div>
			)}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	saveLocation: () => dispatch(saveCurrentLocation()),
});
const mapStateToProps = ({ saved }) => ({
	list: saved.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
