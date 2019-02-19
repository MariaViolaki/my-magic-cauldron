import React from 'react';
import Potion from './Potion/Potion'
import './Grimoire.css';

import { 
	potions
} from '../../../../potions/potions';

const Grimoire = () => {

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
					<Potion
						potion={potion}
					/>
				</div>
			</div>
		);
	});

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