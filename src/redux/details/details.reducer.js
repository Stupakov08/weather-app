import detailsTypes from './details.types';

const INITIAL_STATE = {
	data: null,
	loading: false,
	error: null,
};

const detailsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case detailsTypes.GET_WEATHER_START:
			return {
				...state,
				data: null,
				loading: true,
			};
		case detailsTypes.GET_WEATHER_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
				error: null,
			};
		case detailsTypes.GET_WEATHER_FAILURE:
			return {
				...state,
				data: null,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default detailsReducer;
