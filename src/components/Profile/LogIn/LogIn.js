import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LogIn.css';

import { 
	updateUsernameEmail, updatePassword, logInUser,
	setUserAccess
} from '../../../redux/actions';

import {
	SIGNUP, LOGIN, MEMBER
} from '../../../redux/constants';

/********************************************/

const mapStateToProps = (state) => {
	return {
		user: state.logInUser.user,
		isPending: state.logInUser.isPending,
		error: state.logInUser.error,
		username_email: state.updateUser.username_email,
		password: state.updateUser.password,
		access: state.setUserAccess.access
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateUsernameEmail: (event) => {
			dispatch(updateUsernameEmail(event.target.value));
		},
		onUpdatePassword: (event) => {
			dispatch(updatePassword(event.target.value));
		},
		onLogInUser: (username_email, password) => {
			dispatch(logInUser(username_email, password));
		},
		onSetUserAccess: (access) => {
			dispatch(setUserAccess(access));
		}
	}
}

const mergeProps = (stateProps, dispatchProps) => {
	const {
			username_email, password
	} = stateProps;

	return {
		...stateProps, 
		...dispatchProps,
		onSubmitRequest: () => {
			dispatchProps.onLogInUser(username_email, password);
		}
	}
}

class LogIn extends Component {

	onLogIn = (event) => {
		this.props.onSubmitRequest();
	}

	switchToSignUp = () => {
		this.props.onSetUserAccess(SIGNUP);
	}

	componentDidUpdate() {
		if (Object.keys(this.props.user).length != 0) {
			this.props.onSetUserAccess(MEMBER);
		}
	}

	render() {
		const { 
			onUpdateUsernameEmail, onUpdatePassword
		} = this.props;

		return( 
			<div className='form-box'>
				<div className='form-inner-box rounded-table'>
					<h1 className='heading'>Log In</h1>
					<p className='form-text'>Username or Email</p>
					<input 
						className='form-input input-text' 
						type='email'
						onChange={onUpdateUsernameEmail}
					/>
					<p className='form-text'>Password</p>
					<input 
						className='form-input input-text' 
						type='password'
						onChange={onUpdatePassword}
					/>
					<div className='form-options'>
						<button 
							className='form-button'
							onClick={this.onLogIn}>
							{'Log In'}
						</button>
						<p 
							className='form-link'
							onClick={this.switchToSignUp}>
							{'Sign Up'}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps, mergeProps
)(LogIn);