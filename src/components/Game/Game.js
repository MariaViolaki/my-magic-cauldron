import React from 'react';
import Cauldron from './Cauldron/Cauldron';
import Table from './Table/Table';
import Ingredients from './Ingredients/Ingredients';
import './Game.css';

const Game = () => {
	return(
		<div className='Game'>
			<div className='game-container'>
				<Table />
				<div className='cauldron-container'>
					<Cauldron />
				</div>
			</div>
			<Ingredients />
		</div>
	);
}

export default Game;