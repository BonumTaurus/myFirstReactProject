import style from './Content.module.css';
import { Profile } from './Profile/Profile';
import { DialogsContainer } from './Dialogs/DialogsContainer';
import { Routes, Route } from 'react-router-dom';

const Content = (props) => {

	return (
		<div className={style.content}>
			<Routes>
				<Route path={'profile'} element={<Profile />} />
				<Route path={'dialogs'} element={<DialogsContainer />} />
				<Route path={'dialogs/:id'} element={<DialogsContainer />} />
			</Routes>
		</div>
	)
}

export { Content };