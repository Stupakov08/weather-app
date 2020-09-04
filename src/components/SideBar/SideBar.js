import React from 'react';
import './SideBar.scss';
import SearchForm from '../SearchForm/SearchForm';

const SideBar = () => {
	return (
		<aside className='c-side-bar'>
			<SearchForm />
		</aside>
	);
};

export default SideBar;
