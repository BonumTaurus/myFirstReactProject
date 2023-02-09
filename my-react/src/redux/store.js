import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { profileUserReducer } from './profileUser-reducer'
import { authReducer } from './auth-reducer'
import { appReducer } from './app-reducer'

const reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	profileUser: profileUserReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export { store }