import { CHANGE_ROUTE, ROUTE_HOME } from './constants.js';

const initialRouteState = {
	route: ROUTE_HOME
}

export const setRoute = (state=initialRouteState, action={}) => {
	switch(action.type) {
		case CHANGE_ROUTE:
			return Object.assign({}, state, {
				route: action.payload
			});
		default:
			return state;
	}
}