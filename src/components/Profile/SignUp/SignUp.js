import React, { Component } from 'react';
import './SignUp.css';
import { connect } from 'react-redux';

import { 
	updateName, updateUsername, updateEmail,
	updatePassword, signUpUser, setUserAccess
} from '../../../redux/actions';

import {
	SIGNUP, LOGIN, MEMBER
} from '../../../redux/constants';

/********************************************/

const mapStateToProps = (state) => {
	return {
		user: state.signUpUser.user,
		isPending: state.signUpUser.isPending,
		error: state.signUpUser.error,
		name: state.updateUser.name,
		username: state.updateUser.username,
		email: state.updateUser.email,
		password: state.updateUser.password,
		access: state.setUserAccess.access
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateName: (event) => {
			dispatch(updateName(event.target.value));
		},
		onUpdateUsername: (event) => {
			dispatch(updateUsername(event.target.value));
		},
		onUpdateEmail: (event) => {
			dispatch(updateEmail(event.target.value));
		},
		onUpdatePassword: (event) => {
			dispatch(updatePassword(event.target.value));
		},
		onSignUpUser: (name, username, email, password) => {
			dispatch(signUpUser(name, username, email, password));
		},
		onSetUserAccess: (access) => {
			dispatch(setUserAccess(access));
		}
	}
}

const mergeProps = (stateProps, dispatchProps) => {
	const {
			name, username, email, password
	} = stateProps;

	return {
		...stateProps, 
		...dispatchProps,
		onSubmitRequest: () => {
			dispatchProps.onSignUpUser(name, username, email, password);
		}
	}
}

class SignUp extends Component {

	onSignUp = (event) => {
		this.props.onSubmitRequest();
	}

	switchToLogIn = () => {
		this.props.onSetUserAccess(LOGIN);
	}

	componentDidUpdate() {
		if (Object.keys(this.props.user).length != 0) {
			this.props.onSetUserAccess(MEMBER);
		}
	}

	render() {
		const { 
			onUpdateName, onUpdateUsername,
			onUpdateEmail, onUpdatePassword
		} = this.props;

		return(
			<div className='form-box'>
				<div className='form-inner-box rounded-table'>
					<h1 className='heading'>Sign Up</h1>
					<p className='form-text'>Name</p>
					<input 
						className='form-input input-text' 
						type='text'
						onChange={onUpdateName}
					/>
					<p className='form-text'>Username</p>
					<input 
						className='form-input input-text' 
						type='text'
						onChange={onUpdateUsername}
					/>
					<p className='form-text'>Email</p>
					<input 
						className='form-input input-text' 
						type='email'
						onChange={onUpdateEmail}
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
							onClick={this.onSignUp}>
							{'Sign Up'}
						</button>
						<p 
							className='form-link'
							onClick={this.switchToLogIn}>
							{'Log In'}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps, mergeProps
)(SignUp);