import style from './Dialogs.module.css'
import { DialogsFriend } from './DialogsFriend/DialogsFriend'
import { DialogMessage } from './DialogsMessage/DialogMessage'

const Dialogs = (props) => {


	let friendsDialog = props.dialogsFriends.map(f => <DialogsFriend key={f.id} id={f.id} name={f.name} ava={f.ava} />)
	let messages = props.dialogsMessages.map(m => <DialogMessage key={m.id} message={m.message} />)

	return (
		<div className={style.dialogs}>
			<div className={style.dialogs__friends}>
				{friendsDialog}
			</div>
			<div className={style.dialogs__messages}>
				{messages}
			</div>
		</div>
	)
}

export { Dialogs };