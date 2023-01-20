import style from './Content.module.css';
import { Profile } from './Profile/Profile';
import { Dialogs } from './Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';

const Content = () => {
	return (
		<div className={style.content}>
			<Routes>
				<Route path={'/profile'} element={<Profile />} />
				<Route path={'dialogs'} element={<Dialogs />} />
			</Routes>
		</div>
	)
}

export { Content };