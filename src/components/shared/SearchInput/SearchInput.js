import React from 'react';
import './SearchInput.scss';

const SearchInput = (props) => {
	return (
		<div className='c-inputbox'>
			<input
				type='text'
				className='c-inputbox__text'
				placeholder='Search Location'
				{...props}
			/>
		</div>
	);
};

export default SearchInput;
