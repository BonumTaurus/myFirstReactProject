import style from './Sidebar.module.css'

const Sidebar = (props) => {
	return (
		<div className={style.sidebar}>
			<div className={style.sidebar__list}>
				<div className={style.sidebar__item}>
					<a>Profile</a>
				</div>
				<div className={style.sidebar__item}>
					<a>Dialogs</a>
				</div>
				<div className={style.sidebar__item}>
					<a>News</a>
				</div>
				<div className={style.sidebar__item}>
					<a>Music</a>
				</div>
				<div className={style.sidebar__item}>
					<a>Users</a>
				</div>
			</div>
		</div>
	)
}

export { Sidebar };