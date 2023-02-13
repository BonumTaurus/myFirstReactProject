import style from './Users.module.css'
import userAva from '../../../images/ava.jpg'
import { NavLink } from 'react-router-dom'
import { Paginator } from '../../../Paginator/Paginator'


const Users = (props) => {

	return (
		<div className={style.users}>
			<Paginator {...props} />
			{
				props.users.map(u =>
					<div key={u.id} className={style.userItem}>
						<div className={style.userInfo}>
							<NavLink to={`/profile/${u.id}`}><img src={u.photos.large === null ? userAva : u.photos.large}
								className={style.userAva}></img></NavLink>
							<span className={style.userName}>{u.name}</span>
						</div>
						<div className={style.userStatus}>
							<span className={style.status}>STATUS: </span><span className={style.statusText}>{u.status}</span>
						</div>
						<div className={style.userButton}>
							{u.followed ? <button disabled={props.inProgressUserId.some(id => id === u.id)} onClick={() => props.onUnfollowClick(u.id)}>unfollow</button> :
								<button disabled={props.inProgressUserId.some(id => id === u.id)} onClick={() => props.onFollowClick(u.id)}>follow</button>}
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Users;