import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Member.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PotionScore from './PotionScore/PotionScore';
import Grimoire from './Grimoire/Grimoire';

import { 
	updateName, updateUsername, updateEmail
} from '../../../redux/actions.js';

const mapStateToProps = (state) => {
	return {
		name: state.signUpUser.user.name,
		username: state.signUpUser.user.username,
		email: state.signUpUser.user.email,
		potions: state.signUpUser.user.potions
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNameUpdate: (event) => {
			dispatch(updateName(event.target.value));
		},
		onUsernameUpdate: (event) => {
			dispatch(updateUsername(event.target.value));
		},
		onEmailUpdate: (event) => {
			dispatch(updateEmail(event.target.value));
		}
	};
}

class Member extends Component {
	render() {
		const {
			name, username, email, potions,
			onNameUpdate, onUsernameUpdate, onEmailUpdate
		} = this.props;
		
		return (
			<div>
				<h1 className='heading profile-heading'>
					{`${name}, the Grand Magician`}
				</h1>
				<div className='info-box message-section'>
					<ProfileInfo
						name={name}
						username={username}
						email={email}
						onNameChange={onNameUpdate}
						onUsernameChange={onUsernameUpdate}
						onEmailChange={onEmailUpdate}
					/>
					<PotionScore
						potions={potions}
					/>
				</div>
				<Grimoire />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Member);