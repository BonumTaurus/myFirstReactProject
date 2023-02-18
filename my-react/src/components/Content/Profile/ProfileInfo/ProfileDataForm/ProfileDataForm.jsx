import style from './ProfileDataForm.module.css'
import { reduxForm, Field } from 'redux-form'

const ProfileData = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.form}>
			<div>
				<Field component={'input'} type={'text'} name={'fullName'} placeholder={'fullName'} />
			</div>
			<div>
				<Field component={'input'} type={'text'} name={'aboutMe'} placeholder={'About me'} />
			</div>
			<div className={style.formTitle}>Looking for a job:</div>
			<div>
				<label htmlFor={'yes'}>Yes</label>
				<Field id={'yes'} component={'input'} type={'radio'} name={'lookingForAJob'} value={'true'} />
			</div>
			<div>
				<label htmlFor={'no'}>No</label>
				<Field id={'no'} component={'input'} type={'radio'} name={'lookingForAJob'} value={'false'} />
			</div>
			<div>
				<Field component={'input'} type={'text'} name={'lookingForAJobDescription'} placeholder={'My skills'} />
			</div>
			<div>
				<h3 className={style.formTitle}>My contacts:</h3>
				{props.error && <div className={style.formError}>{props.error}</div>}
				{Object.keys(props.myProfile.contacts).map(key =>
					<div key={key}>
						<Field component={'input'} placeholder={key} name={`contacts.${key}`} />
					</div>
				)}
			</div>
			<button>save</button>
		</form>
	)
}

export const ProfileDataForm = reduxForm({ form: 'profile' })(ProfileData)