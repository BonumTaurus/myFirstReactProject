import style from './DialogsFriend.module.css'

const DialogsFriend = (props) => {
	return (
		<div className={style.dialogs__friend}>
			<img className={style.dialogs__ava} src={props.ava}></img>
			<span>{props.name}</span>
		</div>
	)
}

export { DialogsFriend };