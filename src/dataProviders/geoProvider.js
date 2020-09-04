const geoProvider = {
	getCurrentLocation: () => {
		if (!navigator.geolocation) return;

		return new Promise((resolve, reject) => {
			const success = ({ coords: { latitude, longitude } }) => {
				resolve({
					lat: Math.round(latitude * 100) / 100,
					lon: Math.round(longitude * 100) / 100,
				});
			};

			navigator.geolocation.getCurrentPosition(success, reject);
		});
	},
};

export default geoProvider;
