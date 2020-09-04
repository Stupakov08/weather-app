import { wheatherUrl, Fetch } from '../utils';

const weatherProvider = {
	find: (searchString) => {
		const url = wheatherUrl({
			action: 'find',
			q: searchString,
			units: 'metric',
		});
		return Fetch(url);
	},
	get: (query) => {
		const options = {};
		if (!query) return Promise.reject();

		if (typeof query == 'object') {
			const { lat, lon } = query;
			if (lat && lon) {
				options.lat = lat;
				options.lon = lon;
			}
		} else {
			options.id = query;
		}

		const url = wheatherUrl({
			...options,
			units: 'metric',
		});
		return Fetch(url);
	},
};

export default weatherProvider;
