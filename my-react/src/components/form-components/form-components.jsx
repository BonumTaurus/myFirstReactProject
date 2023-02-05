import style from './form-components.module.css'

export const TextareaDialogs = ({ meta, input, ...props }) => {
	return (
		<div className={style.textareaBlock}>
			<textarea className={meta.error ? style.errorTextarea : style.textareaInput} {...input} {...props} />

			<div>{meta.error && <span>{meta.error}</span>}</div>

		</div>
	)
}

export const Input = ({ meta, input, ...props }) => {
	return (
		<div className={style.inputBlock}>
			<input className={meta.error && meta.touched ? style.errorInput : style.input} {...input} {...props} />

			{meta.error && meta.touched && <span>{meta.error}</span>}

		</div>
	)
}