import savedTypes from './saved.types';
import { addLocationToList, deleteLocationFromList } from './saved.utils';

const INITIAL_STATE = {
	list: [],
};

const savedReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case savedTypes.SAVE_LOCATION:
			return {
				...state,
				list: addLocationToList(state.list, action.payload),
			};
		case savedTypes.DELETE_LOCATION:
			return {
				...state,
				list: deleteLocationFromList(state.list, action.payload),
			};

		default:
			return state;
	}
};

export default savedReducer;
