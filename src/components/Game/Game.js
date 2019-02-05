import React from 'react';
import './Game.css';
import Cauldron from './Cauldron/Cauldron';
import Table from './Table/Table';
import Ingredients from './Ingredients/Ingredients';

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