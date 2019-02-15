import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navigation.css';
import { changeRoute } from '../../redux/actions';
import {
	SIGNUP,
	LOGIN,
	MEMBER,
	ROUTE_HOME,
	ROUTE_GAME,
	ROUTE_PROFILE
} from '../../redux/constants';

const mapStateToProps = (state) => {
	return {
		access: state.setUserAccess.access
	};
}

// Send actions to reducer
const mapDispatchToProps = (dispatch) => {
	return {
		onRouteChange: (route) => {
			dispatch(changeRoute(route));
		}
	};
}

class Navigation extends Component {

	renderAccessComponent = () => {
		const { access, onRouteChange } = this.props;

		switch(access) {
			case MEMBER:
				return (
					<li 
						className='list-item'
						onClick={() => onRouteChange(ROUTE_PROFILE)}
						>{'Profile'}
					</li>
				);
			case LOGIN:
				return (
					<li 
						className='list-item'
						onClick={() => onRouteChange(ROUTE_PROFILE)}
						>{'Log In'}
					</li>
				);
			case SIGNUP:
			default:
				return (
					<li 
						className='list-item'
						onClick={() => onRouteChange(ROUTE_PROFILE)}
						>{'Sign Up'}
					</li>
				);
		}
	}

	render() {
		const { onRouteChange } = this.props;
		return(
			<nav className='Navigation nav-footer'>
				<ul className='major-nav-list'>
					<li 
						className='nav-header list-item'
						onClick={() => onRouteChange(ROUTE_HOME)}
						>{'My Magic Cauldron'}
					</li>
					<li>
						<ul className='minor-nav-list'>
							<li 
								className='list-item'
								onClick={() => onRouteChange(ROUTE_GAME)}
								>{'Game'}
							</li>
							{this.renderAccessComponent()}
						</ul>
					</li>
				</ul>
			</nav>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);