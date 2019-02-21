import { 
	SET_USER_ACCESS, CHANGE_ROUTE,
	REQUEST_USER_PENDING, REQUEST_USER_SUCCESS, 
	REQUEST_USER_FAILED, 
	LOGOUT_USER,
	DEACTIVATE_PENDING, DEACTIVATE_SUCCESS,
	DEACTIVATE_FAILED,
	SET_NAME, SET_USERNAME, SET_EMAIL, SET_PASSWORD,
	SET_USERNAME_EMAIL,
	SET_POTION, SET_POTION_NUMBER,
	SELECT_ELEMENT, SELECT_FLOWER, SELECT_CRYSTAL,
	OPEN_NAME_BOX, OPEN_USERNAME_BOX, OPEN_EMAIL_BOX,
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
	fetch('https://infinite-sierra-57162.herokuapp.com/signup', {
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
	.then(profile => {
		if (!profile[0].length) {
			return dispatch({
				type: REQUEST_USER_SUCCESS,
				payload: profile
			})
		} else {
			return dispatch({
				type: REQUEST_USER_FAILED,
				payload: profile
			})
		}	
	});
}

export const logInUser = 
(username_email, password) => (dispatch) => {
	dispatch({ type: REQUEST_USER_PENDING });
	fetch('https://infinite-sierra-57162.herokuapp.com/login', {
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
	.then(profile => {
		if (!profile[0].length) {
			return dispatch({
				type: REQUEST_USER_SUCCESS,
				payload: profile
			})
		} else {
			return dispatch({
				type: REQUEST_USER_FAILED,
				payload: profile
			})
		}	
	});
}

/*********************************************/

export const updateName = (username, newName) =>
(dispatch) => {
	dispatch({ type: REQUEST_USER_PENDING });
	fetch('https://infinite-sierra-57162.herokuapp.com/newname', {
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
		if (data[0].name === newName) {
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
	fetch('https://infinite-sierra-57162.herokuapp.com/newusername', {
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
		if (data[0].username === newUsername) {
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
	fetch('https://infinite-sierra-57162.herokuapp.com/newemail', {
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
		if (data[0].email === newEmail) {
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

export const updatePotions = 
(username, element, flower, crystal) => (dispatch) => {
	dispatch({ type: REQUEST_USER_PENDING });
	fetch('https://infinite-sierra-57162.herokuapp.com/game', {
		method: 'put',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			element: element,
			flower: flower,
			crystal: crystal
		})
	})
	.then(response => response.json())
	.then(data => {
		console.log(data);
		return dispatch({
			type: REQUEST_USER_SUCCESS,
			payload: data
		});
	})
	.catch(err => {
		return dispatch({
			type: REQUEST_USER_FAILED,
			payload: err
		});
	});
}

/*********************************************/

export const logOutUser = () => {
	return {
		type: LOGOUT_USER
	};
}

/*********************************************/

export const deactivateAccount = (username) => 
(dispatch) => {
	dispatch({ type: DEACTIVATE_PENDING });
	fetch('https://infinite-sierra-57162.herokuapp.com/deactivate', {
		method: 'delete',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username
		})
	})
	.then(response => response.json())
	.then(data => {
		dispatch({ 
			type: DEACTIVATE_SUCCESS,
			payload: data
		});
	})
	.catch(err => {
		dispatch({ 
			type: DEACTIVATE_FAILED,
			payload: err
		});
	});
}

/*********************************************/

export const setName = (name) => {
	return {
		type: SET_NAME,
		payload: name
	};
}

export const setUsername = (username) => {
	return {
		type: SET_USERNAME,
		payload: username
	};
}

export const setEmail = (email) => {
	return {
		type: SET_EMAIL,
		payload: email
	};
}

export const setPassword = (password) => {
	return {
		type: SET_PASSWORD,
		payload: password
	};
}

export const setUsernameEmail = (username_email) => {
	return {
		type: SET_USERNAME_EMAIL,
		payload: username_email
	};
}

export const setPotion = (potion) => {
	return {
		type: SET_POTION,
		payload: potion
	};
}

export const setPotionNumber = (number) => {
	return {
		type: SET_POTION_NUMBER,
		payload: number
	};
}

/*********************************************/

export const selectElement = (element) => {
	return {
		type: SELECT_ELEMENT,
		payload: element
	};
}

export const selectFlower = (flower) => {
	return {
		type: SELECT_FLOWER,
		payload: flower
	};
}

export const selectCrystal = (crystal) => {
	return {
		type: SELECT_CRYSTAL,
		payload: crystal
	};
}

/*********************************************/

export const openNameBox = () => {
	return {
		type: OPEN_NAME_BOX
	};
}

export const openUsernameBox = () => {
	return {
		type: OPEN_USERNAME_BOX
	};
}

export const openEmailBox = () => {
	return {
		type: OPEN_EMAIL_BOX
	};
}

export const openDeactivateBox = () => {
	return {
		type: OPEN_DEACTIVATE_BOX
	};
}

export const clearActionBox = () => {
	return {
		type: CLEAR_ACTION_BOX
	};
}