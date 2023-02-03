import { profileAPI } from "../API"

const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const ADD_POST = 'ADD-POST'
const GET_STATUS = 'GET-STATUS'

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU'

const initialState = {
	posts: [
		{ id: 1, name: 'name', text: 'Lorem ipsum dolor sit amet.', likesCount: 13, ava: avatar },
		{ id: 2, name: 'name', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', likesCount: 10, ava: avatar },
		{ id: 3, name: 'name', text: 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.', likesCount: 4, ava: avatar }
	],
	newPostText: '',
	profileStatus: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_POST_TEXT: {
			return {
				...state, newPostText: action.postText
			}
		}
		case ADD_POST: {
			let newtext = state.newPostText
			state.newPostText = ''
			return {
				...state, posts: [...state.posts, { id: 4, name: 'name', text: newtext, ava: avatar }]
			}
		}
		case GET_STATUS: {
			return {
				...state, profileStatus: action.status
			}
		}
		default:
			return state
	}
}

export const changePostText = (postText) => ({ type: CHANGE_POST_TEXT, postText })
export const addPost = () => ({ type: ADD_POST })
export const getProfileStatus = (status) => ({ type: GET_STATUS, status })

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