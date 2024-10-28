import { ACTION_TYPE } from '../actions'
import { ROLE } from '../constants'

const initialUserState = {
	login: null,
	password: null,
	role: ROLE.GUEST,
}

export const userReducer = (state = initialUserState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_USER:
			return {
				...state,
				...payload,
				role: ROLE.USER,
			}
		case ACTION_TYPE.LOGOUT:
			return initialUserState
		default:
			return state
	}
}
