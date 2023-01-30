import style from './Content.module.css';
import { Profile } from './Profile/Profile';
import { DialogsContainer } from './Dialogs/DialogsContainer';
import { Routes, Route } from 'react-router-dom';
import { UsersContainer } from './Users/UsersContainer';
import { ProfileUserContainer } from './ProfileUser/ProfileUserContainer';

const Content = (props) => {

	return (
		<div className={style.content}>
			<Routes>
				<Route path={'profile'} element={<Profile />} />
				<Route path={'profile/:userId'} element={<ProfileUserContainer />} />
				<Route path={'dialogs'} element={<DialogsContainer />} />
				<Route path={'dialogs/:id'} element={<DialogsContainer />} />
				<Route path={'users'} element={<UsersContainer />} />
			</Routes>
		</div>
	)
}

export { Content };