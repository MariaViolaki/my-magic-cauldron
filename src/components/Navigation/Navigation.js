import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navigation.css';
import { changeRoute } from '../../redux/actions';
import {
	ROUTE_HOME,
	ROUTE_GAME,
	ROUTE_PROFILE
} from '../../redux/constants';

const mapStateToProps = (state) => {
	return {
		route: state.route
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
							<li 
								className='list-item'
								onClick={() => onRouteChange(ROUTE_PROFILE)}
								>{'Profile'}
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);