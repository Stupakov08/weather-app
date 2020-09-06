import React from 'react';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';
import './GeneralLayout.scss';

const GeneralLayout = () => {
	return (
		<div className='l-general'>
			<div className='l-general__sidebar'>
				<SideBar></SideBar>
			</div>
			<div className='l-general__main'>
				<Main></Main>
			</div>
		</div>
	);
};

export default GeneralLayout;
