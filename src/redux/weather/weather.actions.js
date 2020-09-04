import weatherTypes from './weather.types';
import dataProvider from '../../dataProviders';

export const findLocationStart = () => ({
	type: weatherTypes.FIND_LOCATION_START,
});
export const findLocationSuccess = (payload) => ({
	type: weatherTypes.FIND_LOCATION_SUCCESS,
	payload,
});
export const findLocationFailure = (payload) => ({
	type: weatherTypes.FIND_LOCATION_FAILURE,
	payload,
});

export const findLocation = (searchString) => {
	return async (dispatch) => {
		dispatch(findLocationStart());

		dataProvider.weather
			.findLocation(searchString)
			.then((res) => dispatch(findLocationSuccess(res)))
			.catch((error) => dispatch(findLocationFailure(error)));
	};
};
