import { authAPI, profileAPI, securityAPI } from "../API"
import { stopSubmit } from 'redux-form'

const SET_AUTH_DATA = 'auth/action/SET_AUTH_DATA'
const SET_MY_PROFILE = 'auth/action/SET-MY-PROFILE'
const UPDATE_MY_PHOTO = 'auth/action/UPDATE_MY_PHOTO'
const SET_CAPTCHA_URL = 'auth/action/SET_CAPTCHA_URL'

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	myProfile: null,
	captchaUrl: null
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
		case UPDATE_MY_PHOTO: {
			return {
				...state, myProfile: { ...state.myProfile, photos: action.photo }
			}
		}
		case SET_CAPTCHA_URL: {
			return {
				...state, captchaUrl: action.captcha
			}
		}
		default:
			return state
	}
}

export const setAuthData = (id, email, login, isAuth) => ({ type: SET_AUTH_DATA, payload: { id, email, login, isAuth } })
export const setMyProfile = (profile) => ({ type: SET_MY_PROFILE, profile })
export const setMyNewPhoto = (photo) => ({ type: UPDATE_MY_PHOTO, photo })
export const setCaptchaUrl = (captcha) => ({ type: SET_CAPTCHA_URL, captcha })

export const requestAuthMe = () => async (dispatch) => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data
		dispatch(setAuthData(id, email, login, true))

		profileAPI.getProfile(id).then(response => {
			dispatch(setMyProfile(response.data))
		})
	}
}

export const postLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.data.resultCode === 0) {
		dispatch(requestAuthMe())
	} else if (response.data.resultCode === 10) {
		const result = await securityAPI.getCaptcha()
		dispatch(setCaptchaUrl(result.data.url))
	} else {
		dispatch(stopSubmit('login', { _error: response.data.messages }))
	}
}

export const deleteLogin = () => async (dispatch) => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthData(null, null, null, false))
	}
}

export const updatePhoto = (photo) => async (dispatch) => {
	let response = await profileAPI.savePhoto(photo)
	if (response.data.resultCode === 0) {
		dispatch(setMyNewPhoto(response.data.data.photos))
	}
}

export const updateProfile = (profile, id) => async (dispatch) => {
	let response = await profileAPI.saveProfileData(profile)
	if (response.data.resultCode === 0) {
		profileAPI.getProfile(id).then(response => {
			dispatch(setMyProfile(response.data))
		})
	} else {
		dispatch(stopSubmit('profile', { _error: response.data.messages[0] }))
		return Promise.reject(response.data.messages[0])
	}
}

export { authReducer }