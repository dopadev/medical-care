import { ACTION_TYPE } from './action-type'

export const wasOnWelcomePage = flag => ({
	type: ACTION_TYPE.WAS_ON_WELCOME_PAGE,
	payload: flag,
})
