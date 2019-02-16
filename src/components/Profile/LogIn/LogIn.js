import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LogIn.css';

import { 
	setUsernameEmail, setPassword, logInUser,
	setUserAccess
} from '../../../redux/actions';

import {
	SIGNUP, MEMBER
} from '../../../redux/constants';

/********************************************/

const mapStateToProps = (state) => {
	return {
		user: state.logInUser.user,
		isPending: state.logInUser.isPending,
		error: state.logInUser.error,
		username_email: state.setUser.username_email,
		password: state.setUser.password,
		access: state.setUserAccess.access
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSetUsernameEmail: (event) => {
			dispatch(setUsernameEmail(event.target.value));
		},
		onSetPassword: (event) => {
			dispatch(setPassword(event.target.value));
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
		if (Object.keys(this.props.user).length !== 0) {
			this.props.onSetUserAccess(MEMBER);
		}
	}

	render() {
		const { 
			onSetUsernameEmail, onSetPassword
		} = this.props;

		return( 
			<div className='form-box'>
				<div className='form-inner-box rounded-table'>
					<h1 className='heading'>Log In</h1>
					<p className='form-text'>Username or Email</p>
					<input 
						className='form-input' 
						type='email'
						onChange={onSetUsernameEmail}
					/>
					<p className='form-text'>Password</p>
					<input 
						className='form-input' 
						type='password'
						onChange={onSetPassword}
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