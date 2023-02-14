import { profileAPI } from "../API"

const ADD_POST = 'profile/action/ADD-POST'
const GET_STATUS = 'profile/action/GET-STATUS'
const DELETE_POST = 'profile/action/DELETE-POST'
const SET_SORTED_POSTS = 'SET-SORTED-POSTS'

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU'

const initialState = {
	posts: [
		{ id: 1, name: 'bonum', text: 'Hello everybody', likesCount: 13, ava: avatar },
		{ id: 2, name: 'bonum', text: "I'm developing an app on react", likesCount: 10, ava: avatar },
		{ id: 3, name: 'bonum', text: 'react is cool', likesCount: 4, ava: avatar }
	],
	profileStatus: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let currentId = Number(state.posts.length + 1)
			return {
				...state, posts: [...state.posts, { id: currentId, name: 'bonum', text: action.postText, likesCount: 0, ava: avatar }]
			}
		}
		case GET_STATUS: {
			return {
				...state, profileStatus: action.status
			}
		}
		case DELETE_POST: {
			return {
				...state, posts: state.posts.filter(p => p.id !== action.postId)
			}
		}
		case SET_SORTED_POSTS: {
			return {
				...state, posts: action.sortPosts
			}
		}
		default:
			return state
	}
}

export const addPost = (postText) => ({ type: ADD_POST, postText })
export const getProfileStatus = (status) => ({ type: GET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setSortPosts = (sortPosts) => ({ type: SET_SORTED_POSTS, sortPosts })

export const requestStatus = (id) => async (dispatch) => {
	let response = await profileAPI.getStatus(id)
	dispatch(getProfileStatus(response.data))
}

export const requestUpdateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(getProfileStatus(status))
	}
}

export const selectSort = (sort, posts) => (dispatch) => {
	if (sort === 'likes') {
		let sortedPosts = posts.sort((a, b) => {
			return a.likesCount - b.likesCount
		})
		let newArray = []
		sortedPosts.map(i => {
			newArray.push(i)
		})
		dispatch(setSortPosts(newArray))
	} else if (sort === 'text') {
		let sortedPosts = posts.sort((a, b) => {
			if (a.text > b.text) {
				return 1;
			} else if (a.text < b.text) {
				return -1;
			} else {
				return 0;
			}
		})
		let newArray = []
		sortedPosts.map(i => {
			newArray.push(i)
		})
		dispatch(setSortPosts(newArray))
	}
}

export { profileReducer };