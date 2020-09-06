import {
	getWeather,
	getWeatherForCurrentLocation,
} from './details/details.actions';
let hasRehydrated = false;

export const onRehydrationMiddleware = (store) => (next) => (action) => {
	if (action.type === 'persist/REHYDRATE' && !hasRehydrated) {
		hasRehydrated = true;
		next(action);

		const {
			details: { rehidrationCoord },
		} = store.getState();

		rehidrationCoord
			? store.dispatch(getWeather(rehidrationCoord))
			: store.dispatch(getWeatherForCurrentLocation());
	} else {
		next(action);
	}
};
