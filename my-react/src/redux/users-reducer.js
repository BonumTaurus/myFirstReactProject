import { usersAPI, followAPI } from "../API"

const FOLLOW = 'users/action/FOLLOW'
const UNFOLLOW = 'users/action/UNFOLLOW'
const SET_USERS = 'users/action/SET-USERS'
const SET_PAGE = 'users/action/SET-PAGE'
const GET_TOTAL_USERS = 'users/action/GET-TOTAL-USERS'
const LOADING = 'users/action/LOADING'
const FOLLOWING_IN_PROGRESS = 'users/action/FOLLOWING-IN-PROGRESS'

const initialState = {
	users: [],
	totalUsers: 200,
	countUsersOnPage: 10,
	page: 1,
	portionSize: 10,
	isLoading: true,
	inProgressUserId: []
}

const followUnfollowUsersMap = (array, actionProp, isFollowed) => {
	return array.map(u => {
		if (u.id === actionProp) {
			return { ...u, followed: isFollowed }
		}
		return u
	})
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: followUnfollowUsersMap(state.users, action.userId, true)
				// state.users.map(u => {
				// 	if (u.id === action.userId) {
				// 		return { ...u, followed: true }
				// 	}
				// 	return u
				// })
			}
		case UNFOLLOW:
			return {
				...state,
				users: followUnfollowUsersMap(state.users, action.userId, false)
				// state.users.map(u => {
				// 	if (u.id === action.userId) {
				// 		return { ...u, followed: false }
				// 	}
				// 	return u
				// })
			}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_PAGE: {
			return { ...state, page: action.page }
		}
		case GET_TOTAL_USERS: {
			return { ...state, totalUsers: action.countUsers }
		}
		case LOADING: {
			return { ...state, isLoading: action.loading }
		}
		case FOLLOWING_IN_PROGRESS: {
			return {
				...state, inProgressUserId: action.progress ? [...state.inProgressUserId, action.userId] :
					state.inProgressUserId.filter(userId => userId != action.userId)
			}
		}
		default:
			return state
	}
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setPage = (page) => ({ type: SET_PAGE, page })
export const getTotalUsers = (countUsers) => ({ type: GET_TOTAL_USERS, countUsers })
export const toggleLoading = (loading) => ({ type: LOADING, loading })
export const inProgressFollowing = (progress, userId) => ({ type: FOLLOWING_IN_PROGRESS, progress, userId })

export const requestUsers = (page, countUsersOnPage) => async (dispatch) => {
	dispatch(toggleLoading(true))
	let response = await usersAPI.getUsers(page, countUsersOnPage)
	dispatch(toggleLoading(false))
	dispatch(setUsers(response.data.items))
	dispatch(getTotalUsers(response.data.totalCount))
}

export const requestUsersOnPage = (page, countUsersOnPage) => async (dispatch) => {
	dispatch(toggleLoading(true))
	dispatch(setPage(page))
	let response = await usersAPI.getUsers(page, countUsersOnPage)
	dispatch(toggleLoading(false))
	dispatch(setUsers(response.data.items))
}

export const requestOnFollow = (userId) => async (dispatch) => {
	dispatch(inProgressFollowing(true, userId))
	let response = await followAPI.followUser(userId)
	if (response.data.resultCode === 0) {
		dispatch(follow(userId))
	}
	dispatch(inProgressFollowing(false, userId))
}

export const requestOnUnfollow = (userId) => async (dispatch) => {
	dispatch(inProgressFollowing(true, userId))
	let response = await followAPI.unfollowUser(userId)
	if (response.data.resultCode === 0) {
		dispatch(unfollow(userId))
	}
	dispatch(inProgressFollowing(false, userId))
}

export { usersReducer };