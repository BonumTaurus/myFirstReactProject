import style from './ProfileData.module.css'

const ProfileData = (props) => {
	return (
		<div className={style.profileBody}>
			<button onClick={() => props.setIsEdit(true)} className={style.profileBodyButton}>Edit profile</button>
			<div className={style.profileBodyItem}>
				<span className={style.profileBodyName}>About me:</span>
				<span className={style.profileBodyContent}>{props.myProfile.aboutMe}</span>
			</div>
			<div className={style.profileBodyItem}>
				<span className={style.profileBodyName}>Looking for a job:</span>
				<span className={style.profileBodyContent}>{props.myProfile.lookingForAJob == true ? 'Yes' : 'No'}</span>
			</div>
			<div className={style.profileBodyItem}>
				<span className={style.profileBodyName}>My skills:</span>
				<span className={style.profileBodyContent}>{props.myProfile.lookingForAJobDescription}</span>
			</div>
			<Contacts myProfile={props.myProfile} />
		</div>
	)
}

const Contacts = ({ myProfile }) => {
	return (
		<div className={style.profileBodyContacts}>
			<h3 className={style.profileBodyContactsTitle}>My contacts:</h3>
			{Object.keys(myProfile.contacts).map(key =>
				<div key={key}>
					<span className={style.profileBodyContactsName}>{key}</span>
					<span className={style.profileBodyContactsLink}>{myProfile.contacts[key]}</span>
				</div>
			)}
		</div>
	)
}

export { ProfileData }