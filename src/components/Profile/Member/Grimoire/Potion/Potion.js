import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Potion.css';

import { 
	lockedPotion
} from '../../../../../potions/potions';

const mapStateToProps = (state) => {
	return {
		userPotions: state.updateUser.user.potions,
		potions: {
			anonymitysbreath: 
				state.updateUser.potions.anonymitysbreath,
	    assassinschoice: 
	    	state.updateUser.potions.assassinschoice,
	    beautysdeceit: 
	    	state.updateUser.potions.beautysdeceit,
	    carousalgift: 
	    	state.updateUser.potions.carousalgift,
	    childswhisper: 
	    	state.updateUser.potions.childswhisper,
	    elvenremedy: 
	    	state.updateUser.potions.elvenremedy,
	    eyeofatlantis: 
	    	state.updateUser.potions.eyeofatlantis,
	    fairyshope: 
	    	state.updateUser.potions.fairyshope,
	    hydrashead: 
	    	state.updateUser.potions.hydrashead,
	    infernalroots: 
	    	state.updateUser.potions.infernalroots,
	    jacksbeanstalk: 
	    	state.updateUser.potions.jacksbeanstalk,
	    raysofastar: 
	    	state.updateUser.potions.raysofastar,
	    regretofgenesis: 
	    	state.updateUser.potions.regretofgenesis,
	    shaperofdreams: 
	    	state.updateUser.potions.shaperofdreams,
	    shiningtears: 
	    	state.updateUser.potions.shiningtears,
	    silencerofdoubts: 
	    	state.updateUser.potions.silencerofdoubts,
	    truelovesmyth: 
	    	state.updateUser.potions.truelovesmyth,
	    wailofamermaid: 
	    	state.updateUser.potions.wailofamermaid,
	    wallflowerssoul: 
	    	state.updateUser.potions.wallflowerssoul,
	    veiledpanacea: 
	    	state.updateUser.potions.veiledpanacea
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