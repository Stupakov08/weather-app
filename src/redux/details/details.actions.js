import detailsTypes from './details.types';
import dataProvider from '../../dataProviders';

export const getWeatherStart = () => ({
	type: detailsTypes.GET_WEATHER_START,
});
export const getWeatherSuccess = (payload) => ({
	type: detailsTypes.GET_WEATHER_SUCCESS,
	payload,
});
export const getWeatherFailure = (payload) => ({
	type: detailsTypes.GET_WEATHER_SUCCESS,
	payload,
});

export const getWeather = (cityId) => {
	return async (dispatch) => {
		dispatch(getWeatherStart());

		dataProvider.weather
			.get(cityId)
			.then((res) => dispatch(getWeatherSuccess(res)))
			.catch((error) => dispatch(getWeatherFailure(error)));
	};
};
