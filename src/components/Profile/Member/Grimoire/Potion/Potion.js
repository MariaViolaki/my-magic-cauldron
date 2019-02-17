import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Potion.css';

import { 
	lockedPotion
} from '../../../../../potions/potions';

const mapStateToProps = (state) => {
	return {
		potions: {
			anonymitysbreath: 
				state.logInUser.potions.anonymitysbreath,
	    assassinschoice: 
	    	state.logInUser.potions.assassinschoice,
	    beautysdeceit: 
	    	state.logInUser.potions.beautysdeceit,
	    carousalgift: 
	    	state.logInUser.potions.carousalgift,
	    childswhisper: 
	    	state.logInUser.potions.childswhisper,
	    elvenremedy: 
	    	state.logInUser.potions.elvenremedy,
	    eyeofatlantis: 
	    	state.logInUser.potions.eyeofatlantis,
	    fairyshope: 
	    	state.logInUser.potions.fairyshope,
	    hydrashead: 
	    	state.logInUser.potions.hydrashead,
	    infernalroots: 
	    	state.logInUser.potions.infernalroots,
	    jacksbeanstalk: 
	    	state.logInUser.potions.jacksbeanstalk,
	    raysofastar: 
	    	state.logInUser.potions.raysofastar,
	    regretofgenesis: 
	    	state.logInUser.potions.regretofgenesis,
	    shaperofdreams: 
	    	state.logInUser.potions.shaperofdreams,
	    shiningtears: 
	    	state.logInUser.potions.shiningtears,
	    silencerofdoubts: 
	    	state.logInUser.potions.silencerofdoubts,
	    truelovesmyth: 
	    	state.logInUser.potions.truelovesmyth,
	    wailofamermaid: 
	    	state.logInUser.potions.wailofamermaid,
	    wallflowerssoul: 
	    	state.logInUser.potions.wallflowerssoul,
	    veiledpanacea: 
	    	state.logInUser.potions.veiledpanacea
		}	
	};
}

class Potion extends Component {

	toggleRecipe = Object.keys(this.props.potions)
		.map((statePotion, i) => {

			if (statePotion === this.props.potion.code &&
					this.props.potions[statePotion]) {
				return (
					<p className='unlocked' key={i}>
						{this.props.potion.recipe}
					</p>
				);
			} else if (statePotion === this.props.potion.code) {
				return (
					<p className='locked' key={i}>
						{lockedPotion}
					</p>
				);
			} else {
				return (<span key={i}></span>);
			}
		});

	render() {
		return(
			<div>
				{this.toggleRecipe}
			</div>
		);
	}
}

export default connect(mapStateToProps)(Potion);