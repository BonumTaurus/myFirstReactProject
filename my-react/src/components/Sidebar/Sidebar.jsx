import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

	const setColorActive = ({ isActive }) => ({ color: isActive ? '#333' : '#fff' })

	return (
		<div className={s.sidebar}>
			<div className={s.sidebar__list}>
				<div className={s.sidebar__item}>
					<NavLink to={'/profile'} style={setColorActive}>Profile</NavLink>
				</div>
				<div className={s.sidebar__item}>
					<NavLink to={'/dialogs'} style={setColorActive}>Dialogs</NavLink>
				</div>
				<div className={s.sidebar__item}>
					<NavLink to={'/news'} style={setColorActive}>News</NavLink>
				</div>
				<div className={s.sidebar__item}>
					<NavLink to={'/music'} style={setColorActive}>Music</NavLink>
				</div>
				<div className={s.sidebar__item}>
					<NavLink to={'/users'} style={setColorActive}>Users</NavLink>
				</div>
			</div>
		</div >
	)
}

export { Sidebar };