import savedTypes from './saved.types';

export const saveCurrentLocation = (coords) => {
	return async (dispatch, getState) => {
		const {
			details: { current },
		} = getState();
		dispatch(saveLocation(current));
	};
};
export const saveLocation = (payload) => ({
	type: savedTypes.SAVE_LOCATION,
	payload,
});
export const deleteLocation = (payload) => ({
	type: savedTypes.DELETE_LOCATION,
	payload,
});
