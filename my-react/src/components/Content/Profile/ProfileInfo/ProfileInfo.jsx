import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div className={style.profile__header}>
			<div className={style.profile__fon}>
				<img src='https://mobimg.b-cdn.net/v3/fetch/ca/cafcc74c0d4e4230e6f7a05e42297a95.jpeg'></img>
			</div>
			<div className={style.profile__ava}>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xbitvBXWXb3Z86QjvGBcdvpBn5KFgrP8-g&usqp=CAU'></img>
			</div>
			<div className={style.profile__name}>Name</div>
		</div>
	)
}

export { ProfileInfo };