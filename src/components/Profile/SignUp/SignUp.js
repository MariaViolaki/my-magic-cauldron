import React, { Component } from 'react';
import './SignUp.css';
import { connect } from 'react-redux';

import { 
	setName, setUsername, setEmail, setPassword, 
	signUpUser, setUserAccess
} from '../../../redux/actions';

import {
	LOGIN, MEMBER
} from '../../../redux/constants';

/********************************************/

const mapStateToProps = (state) => {
	return {
		user: state.signUpUser.user,
		isPending: state.signUpUser.isPending,
		error: state.signUpUser.error,
		name: state.setUser.name,
		username: state.setUser.username,
		email: state.setUser.email,
		password: state.setUser.password,
		access: state.setUserAccess.access
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSetName: (event) => {
			dispatch(setName(event.target.value));
		},
		onSetUsername: (event) => {
			dispatch(setUsername(event.target.value));
		},
		onSetEmail: (event) => {
			dispatch(setEmail(event.target.value));
		},
		onSetPassword: (event) => {
			dispatch(setPassword(event.target.value));
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
		if (Object.keys(this.props.user).length !== 0) {
			this.props.onSetUserAccess(MEMBER);
		}
	}

	render() {
		const { 
			onSetName, onSetUsername, onSetEmail, 
			onSetPassword
		} = this.props;

		return(
			<div className='form-box'>
				<div className='form-inner-box rounded-table'>
					<h1 className='heading'>Sign Up</h1>
					<p className='form-text'>Name</p>
					<input 
						className='form-input' 
						type='text'
						onChange={onSetName}
					/>
					<p className='form-text'>Username</p>
					<input 
						className='form-input' 
						type='text'
						onChange={onSetUsername}
					/>
					<p className='form-text'>Email</p>
					<input 
						className='form-input' 
						type='email'
						onChange={onSetEmail}
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