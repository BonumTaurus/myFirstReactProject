import { legacy_createStore, combineReducers } from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { sidebarReducer } from './sidebar-reducer'

const reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer
})

const store = legacy_createStore(reducers)

export { store }