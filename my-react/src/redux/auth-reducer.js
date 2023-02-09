import { authAPI, profileAPI } from "../API"
import { stopSubmit } from 'redux-form'

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_MY_PROFILE = 'SET-MY-PROFILE'

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	myProfile: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case (SET_AUTH_DATA): {
			return {
				...state,
				...action.payload
			}
		}
		case SET_MY_PROFILE: {
			return {
				...state, myProfile: action.profile
			}
		}
		default:
			return state
	}
}

export const setAuthData = (id, email, login, isAuth) => ({ type: SET_AUTH_DATA, payload: { id, email, login, isAuth } })
export const setMyProfile = (profile) => ({ type: SET_MY_PROFILE, profile })

export const requestAuthMe = () => (dispatch) => {
	return authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data
			dispatch(setAuthData(id, email, login, true))

			profileAPI.getProfile(id).then(response => {
				dispatch(setMyProfile(response.data))
			})
		}
	})
}

export const postLogin = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(requestAuthMe())
		} else {
			dispatch(stopSubmit('login', { _error: response.data.messages }))
		}
	})
}

export const deleteLogin = () => (dispatch) => {
	authAPI.logout().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthData(null, null, null, false))
		}
	})
}

export { authReducer }