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
		name: state.requestUser.user.name,
		username: state.requestUser.user.username,
		email: state.requestUser.user.email,
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

	openConfirmationBox = (openBoxFunction) => {
		openBoxFunction();
		window.document
		.getElementById('ConfirmationBox')
		.style.visibility = 'visible';
	}

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
				<h2 className='profile-heading'>
					{`Profile Information:`}
				</h2>
				<div className='info-section'>
					<h4 className='info-heading'>	
						{`Name`}
					</h4>
					<button 
						className='button info-button'
						onClick={() => this.openConfirmationBox(onOpenNameBox)}>
						{`Change`}
					</button>
					<p 
						id='profile-name'
						className='info-text'>	
						{name}
					</p>
				</div>
				<div className='info-section'>
					<h4 className='info-heading'>	
						{`Username`}
					</h4>
					<button 
						className='button info-button'
						onClick={() => this.openConfirmationBox(onOpenUsernameBox)}>
						{`Change`}
					</button>
					<p className='info-text'>	
						{username}
					</p>
				</div>
				<div className='info-section'>
					<h4 className='info-heading'>	
						{`Email`}
					</h4>
					<button 
						className='button info-button'
						onClick={() => this.openConfirmationBox(onOpenEmailBox)}>
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