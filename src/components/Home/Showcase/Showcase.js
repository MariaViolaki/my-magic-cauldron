import React from 'react';
import './Showcase.css';
import wizard from './wizard.png';

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