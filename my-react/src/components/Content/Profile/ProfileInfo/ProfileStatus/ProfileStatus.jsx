import style from './ProfileStatus.module.css'
import { useState, useEffect } from 'react'

const ProfileStatus = (props) => {

	let [toggleStatus, setToggleStatus] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	let activeToggleStatus = () => {
		setToggleStatus(true)
	}

	let deactiveToggleStatus = () => {
		setToggleStatus(false)
		props.requestUpdateStatus(status)
	}

	let onChangeStatus = (event) => {
		let newTextStatus = event.target.value
		setStatus(newTextStatus)
	}

	return (
		<div className={style.status}>
			{!toggleStatus ? !status ? <div onDoubleClick={activeToggleStatus} className={style.statusText}><span>No status</span></div> :
				<div onDoubleClick={activeToggleStatus} className={style.statusText}><span>{status}</span></div> :
				<div onChange={onChangeStatus} onBlur={deactiveToggleStatus} className={style.statusInput}><input autoFocus={true} defaultValue={status} /></div>}
		</div>
	)
}

export { ProfileStatus }