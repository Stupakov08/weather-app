import React from 'react';
import './Loading.scss';

const Loading = ({ primary, size }) => {
	return (
		<div
			className={`lds-ring ${primary && 'lds-ring--primary'}`}
			style={{ width: size, height: size }}
		>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
export default Loading;
