import style from './Friend.module.css'

const Friend = (props) => {
	return (
		<div className={style.friend}>
			<div className={style.friend__ava}>
				<img src={props.ava}></img>
			</div>
			<div className={style.friend__name}>{props.name}</div>
		</div>
	)
}

export { Friend };