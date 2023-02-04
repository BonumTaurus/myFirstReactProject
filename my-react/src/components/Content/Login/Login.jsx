import style from './Login.module.css'
import { ReduxLoginForm } from './LoginForm'

const Login = (props) => {

	const onSubmit = (formData) => {
		console.log(formData)
	}

	return (
		<div className={style.LoginForm}>
			<h1 className={style.LoginFormTitle}>Login page</h1>
			<ReduxLoginForm onSubmit={onSubmit} />
		</div>
	)
}

export { Login }