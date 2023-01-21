import style from './ProfilePosts.module.css'
import { Post } from './Post/Post';

const ProfilePosts = (props) => {

	let myPosts = props.posts.map(p => <Post key={p.id} ava={p.ava} name={p.name} text={p.text} likes={p.likesCount} />)

	return (
		<>
			<div className={style.profile__setPost}>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			{myPosts}
		</>
	)
}

export { ProfilePosts };