import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css';

import {
	selectElement, selectFlower, selectCrystal,
	updatePotions, setPotion
} from '../../../redux/actions';

import { 
	potions
} from '../../../potions/potions';

const mapStateToProps = (state) => {
	return {
		username: state.requestUser.user.username,
		element: state.storeRecipe.element,
		flower: state.storeRecipe.flower,
		crystal: state.storeRecipe.crystal,
		potion: state.setPotion.potion
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSelectElement: (element) => {
			dispatch(selectElement(element));
		},
		onSelectFlower: (flower) => {
			dispatch(selectFlower(flower));
		},
		onSelectCrystal: (crystal) => {
			dispatch(selectCrystal(crystal));
		},
		onSetPotion: (potion) => {
			dispatch(setPotion(potion));
		},
		onUpdatePotions: (username, element, flower, crystal) => {
			dispatch(
				updatePotions(username, element, flower, crystal)
			);
		}
	};
}

class Table extends Component {

		selectIngredient = (event, classCode) => {
		const {
			onSelectElement, onSelectFlower, onSelectCrystal
		} = this.props;

		switch(classCode) {
			case 'element':
				onSelectElement(event.target.id);
				break;
			case 'flower':
				onSelectFlower(event.target.id);
				break;
			case 'crystal':
				onSelectCrystal(event.target.id);
				break;
			default:
				break;
		}

		const ingredient = window.document
			.getElementById(event.target.id)
		const ingredients = window.document
			.getElementsByClassName(classCode);
		const ingredientsArray = Array
			.prototype.slice.call(ingredients);

		ingredientsArray.forEach(ingredient => {
			ingredient.classList.add('deselect');
			ingredient.classList.remove('select');
		});
		ingredient.classList.add('select');
		ingredient.classList.remove('deselect');
	}

	submitRecipe = () => {
		const {
			username, element, flower, crystal,
			onUpdatePotions, onSetPotion
		} = this.props;

		if (element.length > 0 
			&& flower.length > 0 
			&& crystal.length > 0) {
			if (username === undefined) {
				onUpdatePotions(
					'', element, flower, crystal
				);
			} else {
				onUpdatePotions(
					username, element, flower, crystal
				);
			}

			const storedPotion = potions.filter(potion => {
				return potion.element === element
				&& potion.flower === flower
				&& potion.crystal === crystal
			});

			if (storedPotion.length > 0) {
				onSetPotion(storedPotion[0].code);
			} else {
				onSetPotion('veiledpanacea');
			}
			
		}
	}

	render() {
		return(
			<div className='Table rounded-table'>
				<div className='table-sections'>
					<div className='table-section'>
						<h3 className='heading table-heading'>
							{'Choose Spell Type'}
						</h3>
						<div className='ingredient-options'>
							<p 
								id='Fire' 
								className='element deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'element')
								}>
								{'Fire'}
							</p>
							<p 
								id='Water' 
								className='element deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'element')
								}>
								{'Water'}
							</p>
							<p 
								id='Air' 
								className='element deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'element')
								}>
								{'Air'}
							</p>
							<p 
								id='Earth' 
								className='element deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'element')
								}>
								{'Earth'}
							</p>
						</div>
					</div>
					<div className='table-section'>
						<h3 className='heading table-heading'>
							{'Choose Flower Petals'}
						</h3>
						<div className='ingredient-options'>
							<p 
								id='Sunflower' 
								className='flower deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'flower')
								}>
								{'Sunflower'}
							</p>
							<p 
								id='Petunia' 
								className='flower deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'flower')
								}>
								{'Petunia'}
							</p>
							<p 
								id='Orchid' 
								className='flower deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'flower')
								}>
								{'Orchid'}
							</p>
							<p 
								id='Daisy' 
								className='flower deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'flower')
								}>
								{'Daisy'}
							</p>
						</div>
					</div>
					<div className='table-section'>
						<h3 className='heading table-heading'>
							{'Choose Gem Dust'}
						</h3>
						<div className='ingredient-options'>
							<p 
								id='Amber' 
								className='crystal deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'crystal')
								}>
								{'Amber'}
							</p>
							<p 
								id='Diamond' 
								className='crystal deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'crystal')
								}>
								{'Diamond'}
							</p>
							<p 
								id='Emerald' 
								className='crystal deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'crystal')
								}>
								{'Emerald'}
							</p>
							<p 
								id='Opal' 
								className='crystal deselect'
								onClick={(event) => 
									this.selectIngredient(event, 'crystal')
								}>
								{'Opal'}
							</p>
						</div>
					</div>
				</div>
				<div className='button-container'>
					<button 
						className='magic-button'
						onClick={this.submitRecipe}>
						{'Abracadabra!'}
					</button>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(Table);