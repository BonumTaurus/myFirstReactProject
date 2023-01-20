import { legasy_createStore, combineReducers } from 'redux'
import { dialogsReducer } from './dialogs-reducer'

const reducers = combineReducers({
	dialogsPage: dialogsReducer,
})

const store = legasy_createStore(reducers)