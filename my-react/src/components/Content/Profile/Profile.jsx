import style from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePostsContainer } from './ProfilePosts/ProfilePostsContainer';

const Profile = (props) => {
	return (
		<div className={style.profile}>
			<ProfileInfo />
			<ProfilePostsContainer />
		</div>
	)
}

export { Profile };