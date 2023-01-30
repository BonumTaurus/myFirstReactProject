import style from './Profile.module.css'
import { ProfilePostsContainer } from './ProfilePosts/ProfilePostsContainer';
import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
	return (
		<div className={style.profile}>
			<ProfileInfoContainer />
			<ProfilePostsContainer />
		</div>
	)
}

export { Profile };