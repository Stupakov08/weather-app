import weatherTypes from './weather.types';
import { filterFindedLocations } from './weather.utils';

const INITIAL_STATE = {
	search: {
		findedLocations: [],
		loading: false,
		error: null,
		test: 'gg',
	},
};

const weatherReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case weatherTypes.FIND_LOCATION_START:
			return {
				...state,
				search: {
					...state.search,
					findedLocations: [],
					loading: true,
				},
			};
		case weatherTypes.FIND_LOCATION_SUCCESS:
			return {
				...state,
				search: {
					...state.search,
					findedLocations: filterFindedLocations(action.payload),
					loading: false,
					error: null,
				},
			};
		case weatherTypes.FIND_LOCATION_FAILURE:
			return {
				...state,
				search: {
					...state.search,
					findedLocations: [],
					loading: false,
					error: action.payload,
				},
			};
		default:
			return state;
	}
};

export default weatherReducer;
