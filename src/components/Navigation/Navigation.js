import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navigation.css';

import {
 changeRoute, selectElement, selectFlower,
 selectCrystal, setPotion
} from '../../redux/actions';

import {
	SIGNUP, LOGIN, MEMBER,
	ROUTE_HOME, ROUTE_GAME,	ROUTE_PROFILE
} from '../../redux/constants';

const mapStateToProps = (state) => {
	return {
		access: state.setUserAccess.access
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onRouteChange: (route) => {
			dispatch(changeRoute(route));
		},
		onSelectElement: (element) => {
			dispatch(selectElement(element));
		},
		onSelectFlower: (flower) => {
			dispatch(selectFlower(flower));
		},
		onSelectCrystal: (crystal) => {
			dispatch(selectCrystal(crystal));
		},
		onSetPotion: (potion) => {
			dispatch(setPotion(potion));
		}
	};
}

class Navigation extends Component {

	changeRoute = (route) => {
		const {
			onRouteChange, onSelectElement,
			onSelectFlower, onSelectCrystal,
			onSetPotion
		} = this.props;

		onSelectElement('');
		onSelectFlower('');
		onSelectCrystal('');
		onSetPotion('');
		onRouteChange(route);
		window.scrollTo(0, 0);
	}

	renderAccessComponent = () => {
		const { access } = this.props;

		switch(access) {
			case MEMBER:
				return (
					<li 
						className='list-item'
						onClick={() => this.changeRoute(ROUTE_PROFILE)}
						>{'Profile'}
					</li>
				);
			case LOGIN:
				return (
					<li 
						className='list-item'
						onClick={() => this.changeRoute(ROUTE_PROFILE)}
						>{'Log In'}
					</li>
				);
			case SIGNUP:
			default:
				return (
					<li 
						className='list-item'
						onClick={() => this.changeRoute(ROUTE_PROFILE)}
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
						onClick={() => this.changeRoute(ROUTE_HOME)}
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