import style from './ProfilePosts.module.css'
import Post from './Post/Post';
import { ProfilePostsReduxForm } from './ProfilePostsReduxForm';
import { reset } from 'redux-form';

const ProfilePosts = (props) => {

	let myPosts = props.posts.map(p => <Post key={p.id} ava={p.ava} name={p.name} text={p.text} likes={p.likesCount} />)

	const onSubmit = (values, dispatch) => {
		props.addPost(values.postText);
		dispatch(reset('post'))
	}

	return (
		<>
			<ProfilePostsReduxForm onSubmit={onSubmit} />
			{myPosts}
		</>
	)
}

export { ProfilePosts };