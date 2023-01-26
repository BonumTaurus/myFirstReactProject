import style from './Users.module.css'
import { useEffect } from 'react'
import axios from 'axios'

const Users = (props) => {

	useEffect(() => {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			props.setUsers(response.data.items)
		})
	}, [props.users])

	return (
		<div className={style.users}>
			users
		</div>
	)
}

export { Users }