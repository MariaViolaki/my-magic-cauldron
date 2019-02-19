import React from 'react';
import wizard from './wizard.png';
import './Showcase.css';

const Showcase = () => {
	return(
		<div className='showcase-box'>
			<img
				className='showcase-img' 
				src={wizard} 
				alt='wizard'
			/>
		</div>
	);
}

export default Showcase;