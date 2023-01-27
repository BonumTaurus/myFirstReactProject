import style from './Users.module.css'
import userAva from '../../../images/ava.jpg'


const Users = (props) => {

	return (
		<div className={style.users}>
			{
				props.users.map(u =>
					<div key={u.id} className={style.userItem}>
						<div className={style.userInfo}>
							<img src={userAva} className={style.userAva}></img>
							<span className={style.userName}>{u.name}</span>
						</div>
						<div className={style.userStatus}>
							<span className={style.status}>STATUS: </span><span className={style.statusText}>{u.status}</span>
						</div>
						<div className={style.userButton}>
							{u.followed ? <button onClick={() => props.unfollow(u.id)}>unfollow</button> :
								<button onClick={() => props.follow(u.id)}>follow</button>}
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Users;