import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cauldron.css';
import { 
	potions
} from '../../../potions/potions';

const mapStateToProps = (state) => {
	return {
		potion: state.setPotion.potion,
		element: state.storeRecipe.element,
		flower: state.storeRecipe.flower,
		crystal: state.storeRecipe.crystal
	};
}

class Cauldron extends Component {

	render() {
		const {
			potion, element, flower, crystal
		} = this.props;

		return(
			<div className='Cauldron'>
				<div className='recipe-section'>
					<h2 className='recipe-header'>Recipe</h2>
					<p className='recipe-choice'>
						{`Element: ${element}`}
					</p>
					<p className='recipe-choice'>
						{`Flower: ${flower}`}
					</p>
					<p className='recipe-choice'>
						{`Crystal: ${crystal}`}
					</p>
				</div>
				<div className='potion-container'>
					{
						(potion.length > 0)
						? (
						<img
							className='potion' 
							src={
								potions.filter(item => {
									return item.code === potion;
								})[0].image
							}
							alt='potion'
						/>
						)
						: (<div></div>)
					}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Cauldron);