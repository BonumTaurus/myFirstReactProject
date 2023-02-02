import { authAPI, profileAPI } from "../API"

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
				...action.authData,
				isAuth: true
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

export const setAuthData = (id, email, login) => ({ type: SET_AUTH_DATA, authData: { id, email, login } })
export const setMyProfile = (profile) => ({ type: SET_MY_PROFILE, profile })

export const requestAuthMe = () => (dispatch) => {
	authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data
			dispatch(setAuthData(id, email, login))

			profileAPI.getProfile(id).then(response => {
				dispatch(setMyProfile(response.data))
			})
		}
	})
}
export { authReducer }