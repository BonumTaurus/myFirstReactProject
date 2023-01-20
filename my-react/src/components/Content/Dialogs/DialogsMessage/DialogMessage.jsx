import style from './DialogMessage.module.css'

const DialogMessage = (props) => {
	return (
		<div className={style.dialogs__message}>{props.message}</div>
	)
}

export { DialogMessage };