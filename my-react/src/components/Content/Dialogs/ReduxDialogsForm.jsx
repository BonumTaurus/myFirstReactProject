import style from './ReduxDialogsForm.module.css'
import { reduxForm, Field } from 'redux-form'
import { TextareaDialogs } from '../../form-components/form-components'
import { maxLength } from '../../validators/validators'

const DialogsForm = (props) => {

	const maxLength15 = maxLength(25)

	return (
		<form onSubmit={props.handleSubmit} className={style.message__box}>
			<Field component={TextareaDialogs} validate={maxLength15} name={'messageText'}></Field>
			<button className={style.message__button}>Add message</button>
		</form>
	)
}

export const ReduxDialogsForm = reduxForm({ form: 'dialogs' })(DialogsForm)