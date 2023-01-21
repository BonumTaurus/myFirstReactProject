import style from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePosts } from './ProfilePosts/ProfilePosts';

const Profile = (props) => {
	return (
		<div className={style.profile}>
			<ProfileInfo />
			<ProfilePosts posts={props.posts} />
		</div>
	)
}

export { Profile };