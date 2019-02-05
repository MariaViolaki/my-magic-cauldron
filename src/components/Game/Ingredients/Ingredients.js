import React from 'react';
import './Ingredients.css';

const Ingredients = () => {
	return (
		<div className='Ingredients message-section'>
			<h2 className='heading'>Ingredients & Symbolism</h2>
			<div className='list-container'>
				<div className='symbols-section'>
					<h3 className='symbols-header'>Elements</h3>
					<p>
						<strong>Fire:</strong>
						{' love, anger, strength'}
					</p>
					<p>
						<strong>Water:</strong>
						{' life, dreams, purity'}
					</p>
					<p>
						<strong>Air:</strong>
						{' wisdom, harmony, creation'}
					</p>
					<p>
						<strong>Earth:</strong>
						{' fertility, security, order'}
					</p>
				</div>
				<div className='symbols-section'>
					<h3 className='symbols-header'>Flowers</h3>
					<p>
						<strong>Sunflower:</strong>
						{' joy, strength'}
					</p>
					<p>
						<strong>Petunia:</strong>
						{' resentment, anger'}
					</p>
					<p>
						<strong>Orchid:</strong>
						{' elegance, beauty'}
					</p>
					<p>
						<strong>Daisy:</strong>
						{' purity, innocence'}
					</p>
				</div>
				<div className='symbols-section'>
					<h3 className='symbols-header'>Crystals</h3>
					<p>
						<strong>Amber:</strong>
						{' health, nature'}
					</p>
					<p>
						<strong>Diamond:</strong>
						{' strength, victory'}
					</p>
					<p>
						<strong>Emerald:</strong>
						{' wisdom, intuition'}
					</p>
					<p>
						<strong>Opal:</strong>
						{' bad luck'}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Ingredients;