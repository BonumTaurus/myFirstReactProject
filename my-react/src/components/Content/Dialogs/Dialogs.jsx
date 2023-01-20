import style from './Dialogs.module.css'
import { DialogsFriend } from './DialogsFriend/DialogsFriend'
import { DialogMessage } from './DialogsMessage/DialogMessage'

const Dialogs = (props) => {

	let dialogsFriends = [
		{ id: 1, name: 'Serg', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye8_F5ZHKn2FQ51IdAmOKH3VaIfKkZLXVEA&usqp=CAU' },
		{ id: 2, name: 'Sasha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0iz08DQb9Vf_tqjqBY5IbU6g3NcdVXQ46Q&usqp=CAU' },
		{ id: 3, name: 'Mike', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvjMAhRrU3B-F07_fH_VKPz0CD6_B4B5wlA&usqp=CAU' },
		{ id: 4, name: 'Tony', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51qAVsnMzzC3QHbLaZtPUB5O3mirn5nYRIeXNc3vjI_1WUMX5j42QY3KkQlzxqwT4394&usqp=CAU' },
		{ id: 5, name: 'Olesya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlcCP4wZgBAXHYtpsFCcEvKSoMpqY_Nw5Sg&usqp=CAU' }
	]
	let dialogsMessages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'I created my first react' }
	]

	let friendsDialog = dialogsFriends.map(f => <DialogsFriend key={f.id} name={f.name} ava={f.ava} />)
	let messages = dialogsMessages.map(m => <DialogMessage key={m.id} message={m.message} />)

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