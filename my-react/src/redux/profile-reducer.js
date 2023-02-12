import { profileAPI } from "../API"

const ADD_POST = 'ADD-POST'
const GET_STATUS = 'GET-STATUS'
const DELETE_POST = 'DELETE-POST'

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU'

const initialState = {
	posts: [
		{ id: 1, name: 'bonum', text: 'Lorem ipsum dolor sit amet.', likesCount: 13, ava: avatar },
		{ id: 2, name: 'bonum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', likesCount: 10, ava: avatar },
		{ id: 3, name: 'bonum', text: 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.', likesCount: 4, ava: avatar }
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
		default:
			return state
	}
}

export const addPost = (postText) => ({ type: ADD_POST, postText })
export const getProfileStatus = (status) => ({ type: GET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const requestStatus = (id) => (dispatch) => {
	profileAPI.getStatus(id).then(response => {
		dispatch(getProfileStatus(response.data))
	})
}

export const requestUpdateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(getProfileStatus(status))
		}
	})
}


export { profileReducer };