import { legacy_createStore, combineReducers } from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { profileUserReducer } from './profileUser-reducer'

const reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	profileUser: profileUserReducer
})

const store = legacy_createStore(reducers)

export { store }