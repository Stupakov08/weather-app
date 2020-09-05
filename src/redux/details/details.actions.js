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

export const getWeather = (coords) => {
	return async (dispatch) => {
		dispatch(getWeatherStart());

		dataProvider.weather
			.get(coords)
			.then((res) => dispatch(getWeatherSuccess(res)))
			.catch((error) => dispatch(getWeatherFailure(error)));
	};
};

export const getDailyStart = () => ({
	type: detailsTypes.GET_DAILY_START,
});
export const getDailySuccess = (payload) => ({
	type: detailsTypes.GET_DAILY_SUCCESS,
	payload,
});
export const getDailyFailure = (payload) => ({
	type: detailsTypes.GET_DAILY_SUCCESS,
	payload,
});

export const getDaily = (coords) => {
	return async (dispatch) => {
		dispatch(getDailyStart());

		dataProvider.weather
			.getDaily(coords)
			.then((res) => dispatch(getDailySuccess(res)))
			.catch((error) => dispatch(getDailyFailure(error)));
	};
};
