const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'
const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
	dialogsFriends: [
		{ id: 1, name: 'Serg', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye8_F5ZHKn2FQ51IdAmOKH3VaIfKkZLXVEA&usqp=CAU' },
		{ id: 2, name: 'Sasha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0iz08DQb9Vf_tqjqBY5IbU6g3NcdVXQ46Q&usqp=CAU' },
		{ id: 3, name: 'Mike', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvjMAhRrU3B-F07_fH_VKPz0CD6_B4B5wlA&usqp=CAU' },
		{ id: 4, name: 'Tony', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51qAVsnMzzC3QHbLaZtPUB5O3mirn5nYRIeXNc3vjI_1WUMX5j42QY3KkQlzxqwT4394&usqp=CAU' },
		{ id: 5, name: 'Olesya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlcCP4wZgBAXHYtpsFCcEvKSoMpqY_Nw5Sg&usqp=CAU' }
	],
	dialogsMessages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'I created my first react' },
	],
	newTextMessage: null,
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_TEXT_MESSAGE: {
			return {
				...state, newTextMessage: action.textMessage
			}
		}
		case ADD_MESSAGE: {
			let newText = state.newTextMessage
			state.newTextMessage = ''
			return {
				...state, dialogsMessages: [...state.dialogsMessages, { id: 4, message: newText }]
			}
		}
		default: return state
	}
}

export const newTextMessageActionCreater = (textMessage) => ({ type: CHANGE_TEXT_MESSAGE, textMessage })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export { dialogsReducer };