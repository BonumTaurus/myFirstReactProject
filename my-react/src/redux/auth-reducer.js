const SET_AUTH_DATA = 'SET_AUTH_DATA'

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case (SET_AUTH_DATA): {
			return {
				...state,
				...action.authData,
				isAuth: true
			}
		}
		default:
			return state
	}
}

export const setAuthData = (id, email, login) => ({ type: SET_AUTH_DATA, authData: { id, email, login } })

export { authReducer }