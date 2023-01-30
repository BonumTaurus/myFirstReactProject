import style from './ProfileUser.module.css'
import userAva from '../../../images/ava.jpg'

const ProfileUser = (props) => {
	return (
		<div className={style.userProfile}>
			<div className={style.userProfile__fon}>
				<img src='https://mobimg.b-cdn.net/v3/fetch/ca/cafcc74c0d4e4230e6f7a05e42297a95.jpeg'></img>
			</div>
			<div className={style.userProfile__ava}>
				<img src={props.profileUser.photos.large ? props.profileUser.photos.large : userAva}></img>
			</div>
			<div className={style.userProfile__name}>{props.profileUser.fullName}</div>
		</div>
	)
}

export { ProfileUser }