import style from './Content.module.css';
import React, { Suspense } from 'react';
import { DialogsContainer } from './Dialogs/DialogsContainer';
import { Routes, Route } from 'react-router-dom';
// import { UsersContainer } from './Users/UsersContainer';
import { ProfileUserContainer } from './ProfileUser/ProfileUserContainer';
// import { ProfileContainer } from './Profile/ProfileContainer';
import Login from '../Content/Login/Login'
import { Preloader } from '../../Preloader/Preloader';

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));

const Content = (props) => {

	return (
		<div className={style.content}>
			<Routes>
				<Route path={'profile'} element={<Suspense fallback={<Preloader />}><ProfileContainer /></Suspense>} />
				<Route path={'profile/:userId'} element={<ProfileUserContainer />} />
				<Route path={'dialogs'} element={<DialogsContainer />} />
				<Route path={'dialogs/:id'} element={<DialogsContainer />} />
				<Route path={'users'} element={<Suspense fallback={<Preloader />}><UsersContainer /></Suspense>} />
				<Route path={'login'} element={<Login />} />
			</Routes>
		</div>
	)
}

export { Content };