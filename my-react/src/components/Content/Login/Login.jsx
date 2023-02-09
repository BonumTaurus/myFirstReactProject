import style from './Login.module.css'
import { ReduxLoginForm } from './LoginForm'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { postLogin } from '../../../redux/auth-reducer'


const Login = (props) => {

	const onSubmit = (formData) => {
		props.postLogin(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Navigate replace to={'/profile'} />
	}

	return (
		<div className={style.LoginForm}>
			<h1 className={style.LoginFormTitle}>Login page</h1>
			<ReduxLoginForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, { postLogin })(Login)