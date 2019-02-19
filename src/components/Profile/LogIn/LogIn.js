import React, { Component } from 'react';
import { connect } from 'react-redux';

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
		user: state.requestUser.user,
		isPending: state.requestUser.isPending,
		error: state.requestUser.error,
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
		const fields = window.document
		.getElementsByClassName('login-field');
		const values = [];

		for (let i=0; i < fields.length; i++) {
			values.push(fields[i].value);
		}
		const valuesArray = values.filter(value => {
			return value.length > 0;
		});

		if (valuesArray.length === fields.length) {
			this.props.onSubmitRequest();
		}
	}

	enterAndLogIn = (event) => {
    if (event.keyCode === 13 || event.which === 13) { 
    	this.onLogIn();
    } 
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
					<h2 className='heading'>Log In</h2>
					<p className='form-text'>Username or Email</p>
					<input 
						className='form-input login-field' 
						type='email'
						onChange={onSetUsernameEmail}
						onKeyPress={this.enterAndLogIn}
					/>
					<p className='form-text'>Password</p>
					<input 
						className='form-input login-field' 
						type='password'
						onChange={onSetPassword}
						onKeyPress={this.enterAndLogIn}
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