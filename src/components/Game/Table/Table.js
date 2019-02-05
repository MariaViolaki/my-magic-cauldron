import React from 'react';
import './Table.css';
import star from './star.png';

const Table = () => {
	return(
		<div className='Table'>
			<div className='table-sections'>
				<div className='table-section'>
					<h3 className='heading table-heading'>
						{'Choose Spell Type'}
					</h3>
					<div className='ingredient-options'>
						<p id='fire' className='ingredient'>
							{'Fire'}
						</p>
						<p id='water' className='ingredient'>
							{'Water'}
						</p>
						<p id='air' className='ingredient'>
							{'Air'}
						</p>
						<p id='earth' className='ingredient'>
							{'Earth'}
						</p>
					</div>
				</div>
				<div className='table-section'>
					<h3 className='heading table-heading'>
						{'Choose Flower Petals'}
					</h3>
					<div className='ingredient-options'>
						<p id='sunflower' className='ingredient'>
							{'Sunflower'}
						</p>
						<p id='petunia' className='ingredient'>
							{'Petunia'}
						</p>
						<p id='orchid' className='ingredient'>
							{'Orchid'}
						</p>
						<p id='daisy' className='ingredient'>
							{'Daisy'}
						</p>
					</div>
				</div>
				<div className='table-section'>
					<h3 className='heading table-heading'>
						{'Choose Gem Dust'}
					</h3>
					<div className='ingredient-options'>
						<p id='amber' className='ingredient'>
							{'Amber'}
						</p>
						<p id='diamond' className='ingredient'>
							{'Diamond'}
						</p>
						<p id='emerald' className='ingredient'>
							{'Emerald'}
						</p>
						<p id='opal' className='ingredient'>
							{'Opal'}
						</p>
					</div>
				</div>
			</div>
			<div className='button-container'>
				<img className='star' src={star} alt='star'/>
				<button className='button draw-button'>Abracadabra!</button>
			</div>
		</div>
	);
}

export default Table;