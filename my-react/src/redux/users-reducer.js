const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const GET_TOTAL_USERS = 'GET-TOTAL-USERS'
const LOADING = 'LOADING'

const initialState = {
	users: [],
	totalUsers: 200,
	countUsersOnPage: 10,
	page: 1,
	portionSize: 10,
	isLoading: true
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
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
		default:
			return state
	}
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setPageActionCreator = (page) => ({ type: SET_PAGE, page })
export const getTotalUsersActionCreator = (countUsers) => ({ type: GET_TOTAL_USERS, countUsers })
export const isLoadingActionCreator = (loading) => ({ type: LOADING, loading })


export { usersReducer };