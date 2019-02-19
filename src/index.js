// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Redux imports
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// App imports
import './index.css';
import App from './components/App/App';
import { LOGOUT_USER } from './redux/constants';
import {
	setUserAccess, setRoute, signUpUser, logInUser,
	setUser, updateUser, deactivateAccount, 
	openActionBox, storeRecipe, setPotion
} from './redux/reducers';

const appReducer = combineReducers({
	setUserAccess, setRoute, signUpUser, logInUser, 
	setUser, updateUser, deactivateAccount, 
	openActionBox, storeRecipe, setPotion
});

const rootReducer = (state, action) => {
	if (action.type === LOGOUT_USER) {
		state = undefined;
	}
	return appReducer(state, action);
}

const logger = createLogger();

const store = createStore(
	rootReducer, 
	applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(

<Provider store={store}>
	<App />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
