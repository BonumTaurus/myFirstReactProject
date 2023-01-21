import style from './ProfilePosts.module.css'
import { Post } from './Post/Post';

const ProfilePosts = (props) => {

	let posts = [
		{ id: 1, name: 'name', text: 'Lorem ipsum dolor sit amet.', likesCount: 13, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' },
		{ id: 1, name: 'name', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', likesCount: 10, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' },
		{ id: 1, name: 'name', text: 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.', likesCount: 4, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU' }
	]

	let myPosts = posts.map(p => <Post key={p.id} ava={p.ava} name={p.name} text={p.text} likes={p.likesCount} />)

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