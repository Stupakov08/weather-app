import searchTypes from './search.types';
import dataProvider from '../../dataProviders';
import { filterFindedLocations } from './search.utils';

export const findLocationStart = () => ({
	type: searchTypes.FIND_LOCATION_START,
});
export const findLocationSuccess = (payload) => ({
	type: searchTypes.FIND_LOCATION_SUCCESS,
	payload,
});
export const findLocationFailure = (payload) => ({
	type: searchTypes.FIND_LOCATION_FAILURE,
	payload,
});

export const findLocation = (searchString) => {
	return async (dispatch) => {
		dispatch(findLocationStart());

		dataProvider.location
			.find(searchString)
			.then(filterFindedLocations)
			.then((res) => dispatch(findLocationSuccess(res)))
			.catch((error) => dispatch(findLocationFailure(error)));
	};
};
