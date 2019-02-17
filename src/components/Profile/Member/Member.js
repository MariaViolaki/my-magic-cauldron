import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PotionScore from './PotionScore/PotionScore';
import Grimoire from './Grimoire/Grimoire';
import ConfirmationBox from './ConfirmationBox/ConfirmationBox';
import './Member.css';

import { 
	openDeactivateBox, logOutUser
} from '../../../redux/actions.js';

import {
	OPEN_DEACTIVATE_BOX, OPEN_NAME_BOX,
	OPEN_USERNAME_BOX, OPEN_EMAIL_BOX
} from '../../../redux/constants.js';

const mapStateToProps = (state) => {
	return {
		action: state.openActionBox.action,
		name: state.signUpUser.user.name,
		potions: state.signUpUser.user.potions,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onOpenDeactivateBox: () => {
			dispatch(openDeactivateBox());
		},
		onLogOutUser: () => {
			dispatch(logOutUser());
		}
	};
}

class Member extends Component {

	componentDidUpdate() {
		const {	action } = this.props;

		switch(action) {
			case OPEN_NAME_BOX:
			case OPEN_USERNAME_BOX:
			case OPEN_EMAIL_BOX:
			case OPEN_DEACTIVATE_BOX:
				return(
					window.document
					.getElementById('ConfirmationBox')
					.style.visibility = 'visible'
				);
			case '':
			default:
				return(
					window.document
					.getElementById('ConfirmationBox')
					.style.visibility = 'hidden'
				);
		}	
	}

	render() {
		const {
			name, potions, onOpenDeactivateBox,
			onLogOutUser
		} = this.props;
		
		return (
			<div>
				<h1 className='heading profile-heading'>
					{`${name}, the Grand Magician`}
				</h1>
				<div className='profile-button-box'>
					<button 
						className='button info-button'
						onClick={onOpenDeactivateBox}>
						{`Deactivate Account`}
					</button>
					<button 
						className='button info-button'
						onClick={onLogOutUser}>
						{`Log Out`}
					</button>
				</div>
				<div className='info-box message-section'>
					<ProfileInfo />
					<PotionScore
						potions={potions}
					/>
				</div>
				<Grimoire />
				<ConfirmationBox />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Member);