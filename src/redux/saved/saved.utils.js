export const addLocationToList = (list, item) => {
	if (!item) return list;

	item = {
		id: item.id,
		name: item.name,
		country: item.country,
		coord: item.coord,
	};

	if (!list) return [item];
	const existingLocation = list.find((i) => i.id === item.id);
	if (existingLocation) return list;

	return [...list, item];
};

export const deleteLocationFromList = (list, locationId) => {
	if (!list) return list;

	return list.filter((i) => i.id !== locationId);
};
