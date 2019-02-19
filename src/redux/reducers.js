import { 
	SET_USER_ACCESS, SIGNUP, CHANGE_ROUTE, 
	ROUTE_HOME, REQUEST_USER_PENDING, 
	REQUEST_USER_SUCCESS, REQUEST_USER_FAILED, 
	SET_NAME, SET_USERNAME, SET_EMAIL, 
	SET_PASSWORD, SET_POTION,
	SET_USERNAME_EMAIL, DEACTIVATE_PENDING,
	DEACTIVATE_SUCCESS, DEACTIVATE_FAILED,
	OPEN_NAME_BOX, OPEN_USERNAME_BOX,
	OPEN_EMAIL_BOX, OPEN_DEACTIVATE_BOX,
	CLEAR_ACTION_BOX, SELECT_ELEMENT,
	SELECT_FLOWER, SELECT_CRYSTAL
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
	potions: {},
	potionNumber: 0,
	error: ''
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
				user: action.payload[0],
				potions: action.payload[1],
				potionNumber: Object.values(
					action.payload[1]).filter(value => {
						return value === true
					}).length
			});
		case REQUEST_USER_FAILED:
			return Object.assign({}, state, {
				isPending: false,
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
				user: action.payload[0],
				potions: action.payload[1],
				potionNumber: Object.values(
					action.payload[1]).filter(value => {
						return value === true
					}).length
			});
		case REQUEST_USER_FAILED:
			return Object.assign({}, state, {
				isPending: false,
				error: action.payload
			});
		default:
			return state;
	}
}

export const updateUser = 
(state=initialRequestState, action={}) => {

	switch (action.type) {
		case REQUEST_USER_PENDING:
			return Object.assign({}, state, {
				isPending: true
			});
		case REQUEST_USER_SUCCESS:
			return Object.assign({}, state, {
				isPending: false,
				user: action.payload[0],
				potions: action.payload[1],
				potionNumber: Object.values(
					action.payload[1]).filter(value => {
						return value === true
					}).length
			});
		case REQUEST_USER_FAILED:
			return Object.assign({}, state, {
				isPending: false,
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
	username_email: ''
}

export const setUser = 
(state=initialUserState, action={}) => {

	switch(action.type) {
		case SET_NAME:
			return Object.assign({}, state, {
				name: action.payload
			});
		case SET_USERNAME:
			return Object.assign({}, state, {
				username: action.payload
			});
		case SET_EMAIL:
			return Object.assign({}, state, {
				email: action.payload
			});
		case SET_PASSWORD:
			return Object.assign({}, state, {
				password: action.payload
			});
		case SET_USERNAME_EMAIL:
			return Object.assign({}, state, {
				username_email: action.payload
			});
		default:
			return state;
	}
}

/*********************************************/

const initialDeactivationState = {
	isPending: false,
	success: '',
	error: ''
}

export const deactivateAccount = 
(state=initialDeactivationState, action={}) => {

	switch (action.type) {
		case DEACTIVATE_PENDING:
			return Object.assign({}, state, {
				isPending: true
			});
		case DEACTIVATE_SUCCESS:
			return Object.assign({
				isPending: false,
				success: action.payload
			});
		case DEACTIVATE_FAILED:
			return Object.assign({
				isPending: false,
				error: action.payload
			});
		default:
			return state;
	}
}

/*********************************************/

const initialActionBoxState = {
	action: ''
}

export const openActionBox = 
(state=initialActionBoxState, action={}) => {
	
	switch(action.type)	{
		case OPEN_NAME_BOX:
			return { action: OPEN_NAME_BOX };
		case OPEN_USERNAME_BOX:
			return { action: OPEN_USERNAME_BOX };
		case OPEN_EMAIL_BOX:
			return { action: OPEN_EMAIL_BOX };
		case OPEN_DEACTIVATE_BOX:
			return { action: OPEN_DEACTIVATE_BOX };
		case CLEAR_ACTION_BOX:
			return { action: '' };
		default:
			return state;
	}
}

/*********************************************/

const initialRecipeState = {
	element: '',
	flower: '',
	crystal: ''
};

export const storeRecipe = 
(state=initialRecipeState, action={}) => {

	switch(action.type) {
		case SELECT_ELEMENT:
			return Object.assign({}, state, {
				element: action.payload
			});
		case SELECT_FLOWER:
			return Object.assign({}, state, {
				flower: action.payload
			});
		case SELECT_CRYSTAL:
			return Object.assign({}, state, {
				crystal: action.payload
			});
		default:
			return state;
	}
};

/*********************************************/

const initialPotionState = {
	potion: ''
};

export const setPotion =
(state=initialPotionState, action={}) => {

	switch(action.type) {
		case SET_POTION:
			return { potion: action.payload };
		default:
			return state;
	}
}