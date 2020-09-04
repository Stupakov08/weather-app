export const filterFindedLocations = (res) => {
	return res.list.map(({ id, name, main, sys, weather, coord }) => ({
		id,
		name,
		main,
		sys,
		weather,
		coord,
	}));
};
