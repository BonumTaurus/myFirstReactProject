import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';
import { Friend } from './Friend/Friend';

const Sidebar = (props) => {

	let myFriends = props.myFriends.map(f => <Friend key={f.id} ava={f.ava} name={f.name} />)

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
			<h2>My friends</h2>
			<div className={s.sidebar__friends}>
				{myFriends}
			</div>
		</div>
	)
}

export { Sidebar };