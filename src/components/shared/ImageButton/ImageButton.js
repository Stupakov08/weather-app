import React from 'react';
import './ImageButton.scss';

const ImageButton = ({ children, type = 'button', className, ...rest }) => {
	return (
		<button
			type={type}
			className={`c-image-button hover-effect ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default ImageButton;
