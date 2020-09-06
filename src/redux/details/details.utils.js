export const getCurrent = (current) => {
	const {
		name,
		dt,
		id,
		coord,
		visibility,
		main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
		sys: { country, sunrise, sunset },
		weather: [{ description, icon, main }],
		wind: { speed },
	} = current;

	return {
		name,
		dt,
		id,
		coord,
		visibility,
		feels_like,
		humidity,
		pressure,
		temp,
		temp_max,
		temp_min,
		country,
		sunrise,
		sunset,
		speed,
		description,
		icon,
		main,
	};
};
export const getCoord = ({ coord }) => coord;
export const getDailyList = (list) =>
	list.daily &&
	list.daily.map((item) => {
		const {
			dt,
			feels_like,
			humidity,
			pressure,
			temp,
			sunrise,
			sunset,
			wind_speed: wind,
			weather: [{ description, icon, main }],
		} = item;

		return {
			dt,
			feels_like,
			humidity,
			pressure,
			temp,
			sunrise,
			sunset,
			wind,
			description,
			icon,
			main,
		};
	});
