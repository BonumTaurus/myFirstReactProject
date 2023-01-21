import style from './Content.module.css';
import { Profile } from './Profile/Profile';
import { Dialogs } from './Dialogs/Dialogs';
import { Routes, Route, useParams } from 'react-router-dom';

const Content = (props) => {

	return (
		<div className={style.content}>
			<Routes>
				<Route path={'/profile/'} element={<Profile posts={props.posts} />} />
				<Route path={'dialogs'} element={<Dialogs dialogsFriends={props.dialogsFriends} dialogsMessages={props.dialogsMessages} />} />
			</Routes>
		</div>
	)
}

export { Content };