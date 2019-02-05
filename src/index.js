// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// App imports
import './index.css';
import App from './components/App/App';
import { setRoute } from './redux/reducers';

const store = createStore(setRoute);

ReactDOM.render(

<Provider store={store}>
	<App />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
