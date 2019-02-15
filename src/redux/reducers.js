import { 
	SET_USER_ACCESS, SIGNUP, CHANGE_ROUTE, 
	ROUTE_HOME, REQUEST_USER_PENDING, 
	REQUEST_USER_SUCCESS, REQUEST_USER_FAILED, 
	UPDATE_NAME, UPDATE_USERNAME, UPDATE_EMAIL, 
	UPDATE_PASSWORD, UPDATE_POTIONS,
	UPDATE_USERNAME_EMAIL
} from './constants.js';

/*********************************************/

const initialAccessState = {
	access: SIGNUP
}

export const setUserAccess = 
(state=initialAccessState, action={}) => {

	switch(action.type) {
		case SET_USER_ACCESS:
			return Object.assign({}, state, {
				access: action.payload
			});
		default:
			return state;
	}
}

/*********************************************/

const initialRouteState = {
	route: ROUTE_HOME
}

export const setRoute = 
(state=initialRouteState, action={}) => {

	switch(action.type) {
		case CHANGE_ROUTE:
			return Object.assign({}, state, {
				route: action.payload
			});
		default:
			return state;
	}
}

/*********************************************/

const initialRequestState = {
	isPending: false,
	user: {},
	error: '',
}

export const signUpUser = 
(state=initialRequestState, action={}) => {

	switch(action.type) {
		case REQUEST_USER_PENDING:
			return Object.assign({}, state, {
				isPending: true
			});
		case REQUEST_USER_SUCCESS:
			return Object.assign({}, state, {
				isPending: false,
				user: action.payload,
				error: ''
			});
		case REQUEST_USER_FAILED:
			return Object.assign({}, state, {
				isPending: false,
				user: {},
				error: action.payload
			});
		default:
			return state;
	}
}

export const logInUser = 
(state=initialRequestState, action={}) => {

	switch(action.type) {
		case REQUEST_USER_PENDING:
			return Object.assign({}, state, {
				isPending: true
			});
		case REQUEST_USER_SUCCESS:
			return Object.assign({}, state, {
				isPending: false,
				user: action.payload,
				error: ''
			});
		case REQUEST_USER_FAILED:
			return Object.assign({}, state, {
				isPending: false,
				user: {},
				error: action.payload
			});
		default:
			return state;
	}
}

/*********************************************/

const initialUserState = {
	name: '',
	username: '',
	email: '',
	password: '',
	potions: 0,
	username_email: ''
}

export const updateUser = 
(state=initialUserState, action={}) => {

	switch(action.type) {
		case UPDATE_NAME:
			return Object.assign({}, state, {
				name: action.payload
			});
		case UPDATE_USERNAME:
			return Object.assign({}, state, {
				username: action.payload
			});
		case UPDATE_EMAIL:
			return Object.assign({}, state, {
				email: action.payload
			});
		case UPDATE_PASSWORD:
			return Object.assign({}, state, {
				password: action.payload
			});
		case UPDATE_POTIONS:
			return Object.assign({}, state, {
				potions: action.payload
			});
		case UPDATE_USERNAME_EMAIL:
			return Object.assign({}, state, {
				username_email: action.payload
			});
		default:
			return state;
	}
}