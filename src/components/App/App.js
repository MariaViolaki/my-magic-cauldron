import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Game from '../Game/Game';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

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

class App extends Component {

	renderRouteComponent = () => {
		switch(this.props.route) {
			case ROUTE_HOME:
				return <Home />;
			case ROUTE_GAME:
				return <Game />;
			case ROUTE_PROFILE:
				return <Profile />;
			default:
				return <Home />;
		}
	}

  render() {
    return (
      <div className="App">
        <Navigation />
				{this.renderRouteComponent()}
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
