const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const GET_TOTAL_USERS = 'GET-TOTAL-USERS'
const LOADING = 'LOADING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS'

const initialState = {
	users: [],
	totalUsers: 200,
	countUsersOnPage: 10,
	page: 1,
	portionSize: 10,
	isLoading: true,
	followingInProgress: false,
	inProgressUserId: []
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


export { usersReducer };