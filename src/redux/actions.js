import { 
	SET_USER_ACCESS, CHANGE_ROUTE, 
	REQUEST_USER_PENDING, REQUEST_USER_SUCCESS, 
	REQUEST_USER_FAILED, UPDATE_NAME, 
	UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_PASSWORD,
	UPDATE_POTIONS, UPDATE_USERNAME_EMAIL
} from './constants.js';

/*********************************************/

export const setUserAccess = (access) => {
	return {
		type: SET_USER_ACCESS,
		payload: access
	}
}

/*********************************************/

export const changeRoute = (route) => {
	return {
		type: CHANGE_ROUTE,
		payload: route
	}
}

/*********************************************/

export const signUpUser = 
(name, username, email, password) => (dispatch) => {
	dispatch({ type: REQUEST_USER_PENDING });
	fetch('http://localhost:3002/signup', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			username: username,
			email: email,
			password: password
		})
	})
	.then(response => {
		console.log(response);
		return response.json();
	})
	.then(user => {
		if (!user.length) {
			return dispatch({
				type: REQUEST_USER_SUCCESS,
				payload: user
			})
		} else {
			return dispatch({
				type: REQUEST_USER_FAILED,
				payload: user
			})
		}	
	});
}

export const logInUser = 
(username_email, password) => (dispatch) => {
	dispatch({ type: REQUEST_USER_PENDING });
	fetch('http://localhost:3002/login', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username_email: username_email,
			password: password
		})
	})
	.then(response => response.json())
	.then(user => {
		if (!user.length) {
			return dispatch({
				type: REQUEST_USER_SUCCESS,
				payload: user
			})
		} else {
			return dispatch({
				type: REQUEST_USER_FAILED,
				payload: user
			})
		}	
	});
}

/*********************************************/

export const updateName = (name) => {
	return {
		type: UPDATE_NAME,
		payload: name
	}
}

export const updateUsername = (username) => {
	return {
		type: UPDATE_USERNAME,
		payload: username
	}
}

export const updateEmail = (email) => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = (password) => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}

export const updatePotions = (potions) => {
	return {
		type: UPDATE_POTIONS,
		payload: potions
	}
}

export const updateUsernameEmail = (username_email) => {
	return {
		type: UPDATE_USERNAME_EMAIL,
		payload: username_email
	}
}