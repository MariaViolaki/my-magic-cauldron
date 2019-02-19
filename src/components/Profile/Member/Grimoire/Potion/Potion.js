import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Potion.css';

import { 
	lockedPotion
} from '../../../../../potions/potions';

const mapStateToProps = (state) => {
	return {
		userPotions: state.requestUser.user.potions,
		potions: {
			anonymitysbreath: 
				state.requestUser.potions.anonymitysbreath,
	    assassinschoice: 
	    	state.requestUser.potions.assassinschoice,
	    beautysdeceit: 
	    	state.requestUser.potions.beautysdeceit,
	    carousalgift: 
	    	state.requestUser.potions.carousalgift,
	    childswhisper: 
	    	state.requestUser.potions.childswhisper,
	    elvenremedy: 
	    	state.requestUser.potions.elvenremedy,
	    eyeofatlantis: 
	    	state.requestUser.potions.eyeofatlantis,
	    fairyshope: 
	    	state.requestUser.potions.fairyshope,
	    hydrashead: 
	    	state.requestUser.potions.hydrashead,
	    infernalroots: 
	    	state.requestUser.potions.infernalroots,
	    jacksbeanstalk: 
	    	state.requestUser.potions.jacksbeanstalk,
	    raysofastar: 
	    	state.requestUser.potions.raysofastar,
	    regretofgenesis: 
	    	state.requestUser.potions.regretofgenesis,
	    shaperofdreams: 
	    	state.requestUser.potions.shaperofdreams,
	    shiningtears: 
	    	state.requestUser.potions.shiningtears,
	    silencerofdoubts: 
	    	state.requestUser.potions.silencerofdoubts,
	    truelovesmyth: 
	    	state.requestUser.potions.truelovesmyth,
	    wailofamermaid: 
	    	state.requestUser.potions.wailofamermaid,
	    wallflowerssoul: 
	    	state.requestUser.potions.wallflowerssoul,
	    veiledpanacea: 
	    	state.requestUser.potions.veiledpanacea
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