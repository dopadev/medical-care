import { ACTION_TYPE } from '../actions'

const initialAppState = {
	wasLogout: false,
	wasOnWelcomePage: false,
}

export const appReducer = (state = initialAppState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			}
		case ACTION_TYPE.WAS_ON_WELCOME_PAGE:
			return {
				...state,
				wasOnWelcomePage: payload,
			}
		default:
			return state
	}
}
