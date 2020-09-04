export const filterFindedLocations = (res) => {
	return res.list.map(({ id, name, main, sys, weather }) => ({
		id,
		name,
		main,
		sys,
		weather,
	}));
};
