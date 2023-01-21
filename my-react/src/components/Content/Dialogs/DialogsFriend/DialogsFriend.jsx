import style from './DialogsFriend.module.css'
import { NavLink } from 'react-router-dom'

const DialogsFriend = (props) => {

	return (
		<div className={style.dialogs__friend}>
			<NavLink to={`/dialogs/${props.id}`}><img className={style.dialogs__ava} src={props.ava}></img></NavLink>
			<span>{props.name}</span>
		</div>
	)
}

export { DialogsFriend };