import React from 'react';
import './Grimoire.css';
import { potions } from '../../../../potions/potions';

const renderPotions = potions.map((potion, i) => {
	return(
		<div className='potion-entry' key={i}>
			<img
				className='potion-image'
				src={potion.image}
				alt='potion'
			/>
			<div className='potion-description'>
				<h3>
					{potion.name}
				</h3>
				<p>
					{potion.recipe}
				</p>
			</div>
		</div>
	);
});

const Grimoire = () => {
	return(
		<div className='Grimoire'>
			<h2 className='heading grimoire-heading'>
				{`Grimoire`}
			</h2>
			<div className='potion-list'>
				{renderPotions}
			</div>
		</div>
	);
}

export default Grimoire;