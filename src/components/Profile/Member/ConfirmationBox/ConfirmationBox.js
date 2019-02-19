import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ConfirmationBox.css';

import {
	clearActionBox, setName, setUsername,
	setEmail, updateName, updateUsername, 
	updateEmail, deactivateAccount,	logOutUser
} from '../../../../redux/actions';

import {
	OPEN_NAME_BOX, OPEN_USERNAME_BOX, OPEN_EMAIL_BOX,
	OPEN_DEACTIVATE_BOX
} from '../../../../redux/constants';

const mapStateToProps = (state) => {
	return {
		action: state.openActionBox.action,
		storedUsername: state.requestUser.user.username,
		name: state.setUser.name,
		username: state.setUser.username,
		email: state.setUser.email,
		isPending: state.requestUser.isPending,
		error: state.requestUser.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClearActionBox: () => {
			dispatch(clearActionBox());
		},
		onNameSet: (event) => {
			dispatch(setName(event.target.value));
		},
		onUsernameSet: (event) => {
			dispatch(setUsername(event.target.value));
		},
		onEmailSet: (event) => {
			dispatch(setEmail(event.target.value));
		},
		onNameUpdate: (storedUsername, name) => {
			dispatch(updateName(storedUsername, name));
		},
		onUsernameUpdate: (storedUsername, username) => {
			dispatch(updateUsername(storedUsername, username));
		},
		onEmailUpdate: (storedUsername, email) => {
			dispatch(updateEmail(storedUsername, email));
		},
		onDeactivateAccount: (username) => {
			dispatch(deactivateAccount(username));
		},
		onLogOutUser: () => {
			dispatch(logOutUser());
		}
	}
}

class ConfirmationBox extends Component {

	hideConfirmationBox = () => {
		this.props.onClearActionBox();
		window.document
		.getElementById('ConfirmationBox')
		.style.visibility = 'hidden';
	}

	renderConfirmationHeader = () => {
		const { action } = this.props;

		switch(action) {
			case OPEN_NAME_BOX:
				return(
					<h1 className='confirmation-header'>
						{`Change name to:`}
					</h1>
				);
			case OPEN_USERNAME_BOX:
				return(
					<h1 className='confirmation-header'>
						{`Change username to:`}
					</h1>
				);
			case OPEN_EMAIL_BOX:
				return(
					<h1 className='confirmation-header'>
						{`Change email to:`}
					</h1>
				);
			case OPEN_DEACTIVATE_BOX:
				return(
					<h1 className='confirmation-header'>
						{`Deactivate Account?`}
					</h1>
				);
			default:
				return(<div></div>);
		}
	}

	toggleInputBox = () => {
		const {
			action, onNameSet, onUsernameSet, onEmailSet
		} = this.props;

		switch(action) {
			case OPEN_NAME_BOX:
				return(
					<input 
						className='confirmation-input'
						onChange={onNameSet}
					/>
				);
			case OPEN_USERNAME_BOX:
				return(
					<input 
						className='confirmation-input'
						onChange={onUsernameSet}
					/>
				);
			case OPEN_EMAIL_BOX:
				return(
					<input 
						className='confirmation-input'
						onChange={onEmailSet}
					/>
				);
			case OPEN_DEACTIVATE_BOX:
			default:
				return(<div></div>);
		}
	}

	confirmAction = () => {
		const { 
			action, storedUsername, name, 
			username, email, onNameUpdate, 
			onUsernameUpdate, onEmailUpdate, 
			onDeactivateAccount, onLogOutUser
		} = this.props;
		
		switch(action) {
			case OPEN_NAME_BOX:
				this.hideConfirmationBox();
				onNameUpdate(storedUsername, name);
				break;
			case OPEN_USERNAME_BOX:
				this.hideConfirmationBox();
				onUsernameUpdate(storedUsername, username);
				break;
			case OPEN_EMAIL_BOX:
				this.hideConfirmationBox();
				onEmailUpdate(storedUsername, email);
				break;
			case OPEN_DEACTIVATE_BOX:
				this.hideConfirmationBox();
				onDeactivateAccount(storedUsername);
				onLogOutUser();
				break;
			default:
				this.hideConfirmationBox();
				break;
		}
	}

	render() {
		return (
			<div id='ConfirmationBox'>
				{this.renderConfirmationHeader()}
				{this.toggleInputBox()}
				<div className='confirmation-options'>
					<p 
						id='confirmation-yes'
						className='confirmation-response'
						onClick={this.confirmAction}>
						{`YES`}
					</p>
					<p 
						className='confirmation-response'
						onClick={this.hideConfirmationBox}>
						{`NO`}
					</p>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(ConfirmationBox);