import { CHANGE_ROUTE } from './constants.js';

export const changeRoute = (route) => {
	return {
		type: CHANGE_ROUTE,
		payload: route
	}
}