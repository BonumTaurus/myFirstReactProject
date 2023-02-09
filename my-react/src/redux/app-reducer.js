import { requestAuthMe } from "./auth-reducer"

const INITIALIZE = 'INITIALIZE'

const initialState = {
	initialized: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case (INITIALIZE): {
			return {
				...state,
				initialized: true
			}
		}
		default:
			return state
	}
}

export const initialize = () => ({ type: INITIALIZE })

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(requestAuthMe())
	promise.then(() => {
		dispatch(initialize())
	})
}

export { appReducer }