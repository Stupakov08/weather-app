export const wheatherUrl = ({ action = 'weather', ...rest }) => {
	const query = Object.keys(rest)
		.map((k) => `${k}=${rest[k]}`)
		.concat(`appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
		.join('&');

	return `https://api.openweathermap.org/data/2.5/${action}?${query}`;
};

export const parseStatus = async (res) => {
	const status = res.status;
	res = await res.json();

	return new Promise((resolve, reject) => {
		status >= 200 && status < 300 ? resolve(res) : reject({ status, res });
	});
};

export const Fetch = (url, options) => {
	return fetch(url, {
		method: 'GET',
		...options,
	}).then(parseStatus);
};
