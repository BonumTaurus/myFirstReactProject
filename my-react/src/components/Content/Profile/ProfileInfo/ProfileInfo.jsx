import style from './ProfileInfo.module.css'
import myAva from '../../../../images/myAva.jpg'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
import { ProfileData } from './ProfileData/ProfileData'
import { ProfileDataForm } from './ProfileDataForm/ProfileDataForm'
import { useState } from 'react'

const ProfileInfo = (props) => {

	const [isEdit, setIsEdit] = useState(false)

	const onSubmit = (formData) => {
		props.updateProfile(formData, props.myProfile.userId).then(() => {
			setIsEdit(false)
		})
	}

	return (
		<>
			<div className={style.profile__header}>
				<div className={style.profile__fon}>
					<img src='https://mobimg.b-cdn.net/v3/fetch/ca/cafcc74c0d4e4230e6f7a05e42297a95.jpeg'></img>
				</div>
				<div className={style.profile__ava}>
					<img src={!props.myProfile.photos ? myAva : props.myProfile.photos.large}></img>
				</div>
				<div className={style.profile__changeAva}>
					<input onChange={(e) => props.updatePhoto(e.target.files[0])} type={'file'} id={'file'} />
					<label htmlFor={'file'}>
						<span>change ava</span>
					</label>
				</div>
				<div className={style.profile__name}>{props.myProfile.fullName ? props.myProfile.fullName : 'name'}</div>
				<ProfileStatus status={props.status} requestUpdateStatus={props.requestUpdateStatus} />
			</div>
			{isEdit ? <ProfileDataForm onSubmit={onSubmit} initialValues={props.myProfile} myProfile={props.myProfile} />
				: <ProfileData setIsEdit={setIsEdit} {...props} />}

		</>
	)
}

export { ProfileInfo };