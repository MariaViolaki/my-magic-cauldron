import React from 'react';
import './Cauldron.css';
import potion from './potion.png';

const Cauldron = () => {
	return(
		<div className='Cauldron'>
			<div className='recipe-section'>
				<h2 className='recipe-header'>Recipe</h2>
				<p className='recipe-choice'>
					{`Element: Water`}
				</p>
				<p className='recipe-choice'>
					{`Flower: Sunflower`}
				</p>
				<p className='recipe-choice'>
					{`Crystal: Diamond`}
				</p>
			</div>
			<div className='potion-container'>
				<img
					className='potion' 
					src={potion} 
					alt='potion'
				/>
			</div>
		</div>
	);
}

export default Cauldron;