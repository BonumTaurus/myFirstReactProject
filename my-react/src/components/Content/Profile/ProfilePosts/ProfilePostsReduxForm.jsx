import style from './ProfilePostsReduxForm.module.css'
import { reduxForm, Field } from 'redux-form'
import { emptyField } from '../../../validators/validators'

const ProfilePostsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.profile__setPost}>
			<Field component={'textarea'} validate={emptyField} name={'postText'}></Field>
			<button>Add post</button>
		</form>
	)
}

export const ProfilePostsReduxForm = reduxForm({ form: 'post' })(ProfilePostsForm)