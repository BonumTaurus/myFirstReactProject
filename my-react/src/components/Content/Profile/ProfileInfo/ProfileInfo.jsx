import style from './ProfileInfo.module.css'
import myAva from '../../../../images/myAva.jpg'
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

	return (
		<div className={style.profile__header}>
			<div className={style.profile__fon}>
				<img src='https://mobimg.b-cdn.net/v3/fetch/ca/cafcc74c0d4e4230e6f7a05e42297a95.jpeg'></img>
			</div>
			<div className={style.profile__ava}>
				<img src={myAva}></img>
			</div>
			<div className={style.profile__name}>{props.myProfile.fullName ? props.myProfile.fullName : 'name'}</div>
			<ProfileStatus status={props.status} requestUpdateStatus={props.requestUpdateStatus} />
		</div>
	)
}

export { ProfileInfo };