import detailsTypes from './details.types';
import { getCurrent, getDailyList } from './details.utils';

const INITIAL_STATE = {
	current: null,
	loading: false,
	error: null,
	daily: {
		list: null,
		loading: false,
		error: null,
	},
};

const detailsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case detailsTypes.GET_WEATHER_START:
			return {
				...state,
				current: null,
				loading: true,
			};
		case detailsTypes.GET_WEATHER_SUCCESS:
			return {
				...state,
				current: getCurrent(action.payload),
				loading: false,
				error: null,
			};
		case detailsTypes.GET_WEATHER_FAILURE:
			return {
				...state,
				current: null,
				loading: false,
				error: action.payload,
			};
		case detailsTypes.GET_DAILY_START:
			return {
				...state,
				daily: {
					...state.daily,
					list: null,
					loading: true,
				},
			};
		case detailsTypes.GET_DAILY_SUCCESS:
			return {
				...state,
				daily: {
					...state.daily,
					list: getDailyList(action.payload),
					loading: false,
					error: null,
				},
			};
		case detailsTypes.GET_DAILY_FAILURE:
			return {
				...state,
				daily: {
					...state.daily,
					list: null,
					loading: false,
					error: action.payload,
				},
			};
		default:
			return state;
	}
};

export default detailsReducer;
