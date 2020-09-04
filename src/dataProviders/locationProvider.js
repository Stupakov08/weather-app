import { wheatherUrl, Fetch } from '../utils';

const locationProvider = {
	find: (searchString) => {
		const url = wheatherUrl({
			action: 'find',
			q: searchString,
			units: 'metric',
		});
		return Fetch(url);
	},
};

export default locationProvider;
