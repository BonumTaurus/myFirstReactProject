import style from './LoginForm.module.css'
import { reduxForm, Field, reset } from 'redux-form';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.form}>
			<div className={style.formInput}>
				<Field component={'input'} placeholder={'login'} name={'login'}></Field>
			</div>
			<div className={style.formInput}>
				<Field component={'input'} placeholder={'password'} name={'password'}></Field>
			</div>
			<div className={style.formCheckbox}>
				<label>Remember me</label>
				<Field component={'input'} type={'checkbox'} name={'remember me'}></Field>
			</div>
			<div className={style.formButton}>
				<button>submit</button>
			</div>
		</form>
	)
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

export { ReduxLoginForm }