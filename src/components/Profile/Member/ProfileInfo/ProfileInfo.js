import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfileInfo.css';

import {
	openNameBox, openUsernameBox, openEmailBox
} from '../../../../redux/actions.js';

import {
	OPEN_DEACTIVATE_BOX, OPEN_NAME_BOX, 
	OPEN_USERNAME_BOX, OPEN_EMAIL_BOX
} from '../../../../redux/constants';

const mapStateToProps = (state) => {
	return {
		name: state.signUpUser.user.name,
		username: state.signUpUser.user.username,
		email: state.signUpUser.user.email,
		action: state.openActionBox.action
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onOpenNameBox: () => {
			dispatch(openNameBox());
		},
		onOpenUsernameBox: () => {
			dispatch(openUsernameBox());
		},
		onOpenEmailBox: () => {
			dispatch(openEmailBox());
		}
	};
}

class ProfileInfo extends Component {

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
			name, username, email, onOpenNameBox,
			onOpenUsernameBox, onOpenEmailBox
		} = this.props;

		return(
			<div className='ProfileInfo'>
				<h2 className='profile-heading-2'>
					{`Profile Information:`}
				</h2>
				<div>
					<h4 className='info-heading'>	
						{`Name`}
					</h4>
					<button 
						className='button info-button'
						onClick={onOpenNameBox}>
						{`Change`}
					</button>
					<p 
						id='profile-name'
						className='info-text'>	
						{name}
					</p>
				</div>
				<div>
					<h4 className='info-heading'>	
						{`Username`}
					</h4>
					<button 
						className='button info-button'
						onClick={onOpenUsernameBox}>
						{`Change`}
					</button>
					<p className='info-text'>	
						{username}
					</p>
				</div>
				<div>
					<h4 className='info-heading'>	
						{`Email`}
					</h4>
					<button 
						className='button info-button'
						onClick={onOpenEmailBox}>
						{`Change`}
					</button>
					<p className='info-text'>	
						{email}
					</p>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(ProfileInfo);