import style from './Dialogs.module.css'
import { DialogsFriend } from './DialogsFriend/DialogsFriend'
import { DialogMessage } from './DialogsMessage/DialogMessage'

const Dialogs = (props) => {


	let friendsDialog = props.dialogsFriends.map(f => <DialogsFriend key={f.id} id={f.id} name={f.name} ava={f.ava} />)
	let messages = props.dialogsMessages.map(m => <DialogMessage key={m.id} message={m.message} />)

	let onChangeMessage = (e) => {
		let textMessage = e.target.value
		props.changedMessage(textMessage)
	}

	let onClickButton = () => {
		props.addMessage()
	}

	return (
		<div className={style.dialogs}>
			<div className={style.dialogs__friends}>
				{friendsDialog}
			</div>
			<div className={style.dialogs__messages}>
				{messages}
				<div className={style.message__box}>
					<textarea onChange={onChangeMessage} value={props.newTextMessage} className={style.message__textarea}></textarea>
					<button onClick={onClickButton} className={style.message__button}>Add message</button>
				</div>
			</div>
		</div>
	)
}

export { Dialogs };