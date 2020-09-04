import { wheatherUrl, Fetch } from '../utils';

const weatherProvider = {
	findLocation: (searchString) => {
		const url = wheatherUrl({ action: 'find', q: searchString });
		return Fetch(url);
	},
};

export default weatherProvider;
