import React from 'react';

const CountryIcon = ({ iconId, size = 16, shiny, ...rest }) => {
	const type = shiny ? 'shiny' : 'flat';
	return iconId ? (
		<img
			src={`https://www.countryflags.io/${iconId}/${type}/${size}.png`}
			alt={iconId}
			{...rest}
		/>
	) : null;
};

export default CountryIcon;
