import style from './Content.module.css';
import { DialogsContainer } from './Dialogs/DialogsContainer';
import { Routes, Route } from 'react-router-dom';
import { UsersContainer } from './Users/UsersContainer';
import { ProfileUserContainer } from './ProfileUser/ProfileUserContainer';
import { ProfileContainer } from './Profile/ProfileContainer';
import { Login } from '../Content/Login/Login'

const Content = (props) => {

	return (
		<div className={style.content}>
			<Routes>
				<Route path={'profile'} element={<ProfileContainer />} />
				<Route path={'profile/:userId'} element={<ProfileUserContainer />} />
				<Route path={'dialogs'} element={<DialogsContainer />} />
				<Route path={'dialogs/:id'} element={<DialogsContainer />} />
				<Route path={'users'} element={<UsersContainer />} />
				<Route path={'login'} element={<Login />} />
			</Routes>
		</div>
	)
}

export { Content };