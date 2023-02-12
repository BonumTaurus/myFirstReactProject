import style from './Post.module.css'

const Post = props => {
	return (
		<div className={style.profile__myPosts}>
			<div className={style.profile__post}>
				<div className={style.postInfo}>
					<span className={style.postInfo__number}>{props.number}.</span>
					<img src={props.ava} />
					<div className={style.postInfo__name}>{props.name}</div>
					<div className={style.postInfo__likes}>Like {props.likes}</div>
				</div>
				<div className={style.postText}>{props.text}</div>
			</div>
			<button onClick={() => props.deletePost(props.postId)}>delete post</button>
		</div>
	)
}

export default Post;