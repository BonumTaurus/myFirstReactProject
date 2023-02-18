import style from './Login.module.css'
import { ReduxLoginForm } from './LoginForm'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { postLogin } from '../../../redux/auth-reducer'


const Login = (props) => {

	const onSubmit = (formData) => {
		props.postLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
		console.log(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (props.isAuth) {
		return <Navigate replace to={'/profile'} />
	}

	return (
		<div className={style.LoginForm}>
			<h1 className={style.LoginFormTitle}>Login page</h1>
			<ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl
	}
}

export default connect(mapStateToProps, { postLogin })(Login)