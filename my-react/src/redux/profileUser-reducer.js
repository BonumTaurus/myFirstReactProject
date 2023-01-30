const SET_PROFILE_USER = 'SET-PROFILE-USER'

const initialState = {
	profileUser: null
}

const profileUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE_USER:
			return {
				...state, profileUser: action.profileUser
			}
		default:
			return state
	}
}

export const setProfileUser = (profileUser) => ({ type: SET_PROFILE_USER, profileUser })

export { profileUserReducer }