import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css';

import {
	selectElement, selectFlower, selectCrystal
} from '../../../redux/actions';

const mapStateToProps = (state) => {
	return {
		element: state.storeRecipe.element,
		flower: state.storeRecipe.flower,
		crystal: state.storeRecipe.crystal
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
						className='magic-button'>
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