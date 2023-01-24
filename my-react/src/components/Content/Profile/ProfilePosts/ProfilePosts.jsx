import style from './ProfilePosts.module.css'
import { Post } from './Post/Post';

const ProfilePosts = (props) => {

	let myPosts = props.posts.map(p => <Post key={p.id} ava={p.ava} name={p.name} text={p.text} likes={p.likesCount} />)

	let onChangeText = (e) => {
		let newText = e.target.value
		props.changedText(newText)
	}

	let onClickButton = () => {
		props.addPost()
	}

	return (
		<>
			<div className={style.profile__setPost}>
				<textarea onChange={onChangeText} value={props.newPostText}></textarea>
				<button onClick={onClickButton}>Add post</button>
			</div>
			{myPosts}
		</>
	)
}

export { ProfilePosts };