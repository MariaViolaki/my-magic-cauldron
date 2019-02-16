import { 
	SET_USER_ACCESS, CHANGE_ROUTE, 
	REQUEST_USER_PENDING, REQUEST_USER_SUCCESS, 
	REQUEST_USER_FAILED, SET_NAME, 
	SET_USERNAME, SET_EMAIL, SET_PASSWORD,
	SET_POTIONS, SET_USERNAME_EMAIL,
	DEACTIVATE_PENDING, OPEN_NAME_BOX,
	OPEN_USERNAME_BOX, OPEN_EMAIL_BOX,
	OPEN_DEACTIVATE_BOX, CLEAR_ACTION_BOX
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

export const updateName = (username, newName) =>
(dispatch) => {
	dispatch({ type: REQUEST_USER_PENDING });
	fetch('http://localhost:3002/newname', {
		method: 'put',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			newName: newName
		})
	})
	.then(response => response.json())
	.then(data => {
		if (data.name === newName) {
			return dispatch({ 
		  	type: REQUEST_USER_SUCCESS,
		  	payload: data
		  });
		} else {
			return dispatch({ 
				type: REQUEST_USER_FAILED,
				payload: data
			});
		}
	});
}

export const updateUsername = (username, newUsername) =>
(dispatch) => {
	dispatch({ type: REQUEST_USER_PENDING });
	fetch('http://localhost:3002/newusername', {
		method: 'put',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			newUsername: newUsername
		})
	})
	.then(response => response.json())
	.then(data => {
		if (data.username === newUsername) {
		  return dispatch({ 
		  	type: REQUEST_USER_SUCCESS,
		  	payload: data
		  });
		} else {
			return dispatch({ 
				type: REQUEST_USER_FAILED,
				payload: data
			});
		}
	});
}

export const updateEmail = (username, newEmail) =>
(dispatch) => {
	dispatch({ type: REQUEST_USER_PENDING });
	fetch('http://localhost:3002/newemail', {
		method: 'put',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			newEmail: newEmail
		})
	})
	.then(response => response.json())
	.then(data => {
		if (data.email === newEmail) {
		  return dispatch({ 
		  	type: REQUEST_USER_SUCCESS,
		  	payload: data
		  });
		} else {
			return dispatch({ 
				type: REQUEST_USER_FAILED,
				payload: data
			});
		}
	});
}

/*********************************************/

export const setName = (name) => {
	return {
		type: SET_NAME,
		payload: name
	}
}

export const setUsername = (username) => {
	return {
		type: SET_USERNAME,
		payload: username
	}
}

export const setEmail = (email) => {
	return {
		type: SET_EMAIL,
		payload: email
	}
}

export const setPassword = (password) => {
	return {
		type: SET_PASSWORD,
		payload: password
	}
}

export const setPotions = (potions) => {
	return {
		type: SET_POTIONS,
		payload: potions
	}
}

export const setUsernameEmail = (username_email) => {
	return {
		type: SET_USERNAME_EMAIL,
		payload: username_email
	}
}

/*********************************************/

export const deactivateAccount = (username) => 
(dispatch) => {
	dispatch({ type: DEACTIVATE_PENDING });
	fetch('http://localhost:3002/deactivate', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username
		})
	})
	.then(response => response.json())
	.then(data => console.log(data));
}

/*********************************************/

export const openNameBox = () => {
	return {
		type: OPEN_NAME_BOX
	}
}

export const openUsernameBox = () => {
	return {
		type: OPEN_USERNAME_BOX
	}
}

export const openEmailBox = () => {
	return {
		type: OPEN_EMAIL_BOX
	}
}

export const openDeactivateBox = () => {
	return {
		type: OPEN_DEACTIVATE_BOX
	}
}

export const clearActionBox = () => {
	return {
		type: CLEAR_ACTION_BOX
	}
}