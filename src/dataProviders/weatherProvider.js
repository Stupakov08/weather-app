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
	get: (options) => {
		const url = wheatherUrl({
			units: 'metric',
			...options,
		});
		return Fetch(url);
	},
	getDaily: (options) => {
		const url = wheatherUrl({
			units: 'metric',
			action: 'onecall',
			exclude: 'current,minutely,hourly',
			...options,
		});
		return Fetch(url);
	},
};

export default weatherProvider;
