import searchTypes from './search.types';

const INITIAL_STATE = {
	locations: [],
	loading: false,
	error: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case searchTypes.FIND_LOCATION_START:
			return {
				...state,
				locations: [],
				loading: true,
			};
		case searchTypes.FIND_LOCATION_SUCCESS:
			return {
				...state,
				locations: action.payload,
				loading: false,
				error: null,
			};
		case searchTypes.FIND_LOCATION_FAILURE:
			return {
				...state,
				locations: [],
				loading: false,
				error: action.payload,
			};
		case searchTypes.CLEAR_LOCATIONS:
			return {
				...state,
				locations: [],
			};
		default:
			return state;
	}
};

export default searchReducer;
