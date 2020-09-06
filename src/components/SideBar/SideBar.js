import React from 'react';
import './SideBar.scss';
import SearchForm from '../SearchForm/SearchForm';
import Saved from '../Saved/Saved';

const SideBar = () => {
	return (
		<aside className='c-side-bar'>
			<SearchForm />
			<Saved />
		</aside>
	);
};

export default SideBar;
