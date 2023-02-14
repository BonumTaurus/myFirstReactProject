import style from './SelectSort.module.css'

const SelectSort = (props) => {
	return (
		<select onChange={(e) => props.selectSort(e.target.value, props.posts)} className={style.selectSort}>
			<option disabled>sorting by</option>
			<option value={'likes'}>by likes</option>
			<option value={'text'}>by text</option>
		</select>
	)
}

export { SelectSort }