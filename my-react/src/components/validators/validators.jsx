export const emptyField = (value) => {
	return !value ? 'empty input field' : undefined
}

export const maxLength = (max) => (value) =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined

export const required = value => value ? undefined : 'Required'	
