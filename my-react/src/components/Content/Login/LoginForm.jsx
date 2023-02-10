import style from './LoginForm.module.css'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../validators/validators'
import { Input } from '../../form-components/form-components'

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.form}>
			<div className={style.formInput}>
				<Field component={Input} validate={required} placeholder={'email'} name={'email'}></Field>
			</div>
			<div className={style.formInput}>
				<Field component={Input} validate={required} placeholder={'password'} name={'password'}></Field>
			</div>
			<div className={style.formCheckbox}>
				<label htmlFor='remember'>Remember me</label>
				<Field id='remember' component={'input'} type={'checkbox'} name={'rememberMe'}></Field>
			</div>
			{props.error && <div className={style.formError}>{props.error}</div>}
			<div className={style.formButton}>
				<button>submit</button>
			</div>
		</form>
	)
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

export { ReduxLoginForm }