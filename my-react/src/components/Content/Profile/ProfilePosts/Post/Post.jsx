import style from './Post.module.css'

const Post = (props) => {
	return (
		<div className={style.profile__myPosts}>
			<div className={style.profile__post}>
				<div className={style.postInfo}>
					<img src={props.ava} />
					<div className={style.postInfo__name}>{props.name}</div>
					<div className={style.postInfo__likes}>Like {props.likes}</div>
				</div>
				<div className={style.postText}>{props.text}</div>
			</div>
		</div>
	)
}

export { Post };