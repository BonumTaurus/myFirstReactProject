import style from './Users.module.css'
import userAva from '../../../images/ava.jpg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Users = (props) => {

	let pages = []
	let countPages = Math.ceil(props.totalUsers / props.countUsersOnPage)

	for (let i = 1; i <= countPages; i++) {
		pages.push(i)
	}

	let countPortiones = Math.ceil(countPages / props.portionSize)
	let [numberPortion, setNumberPortion] = useState(1)
	let leftNumberPortion = (numberPortion - 1) * props.portionSize + 1
	let rightNumberPortion = numberPortion * props.portionSize

	return (
		<div className={style.users}>
			<div className={style.usersPaginator}>

				{numberPortion > 1 && <div onClick={() => setNumberPortion(numberPortion - 1)} className={style.usersLeftArrow}></div>}

				{pages.filter(p => p >= leftNumberPortion && p <= rightNumberPortion)
					.map((p, index) =>
						<span key={index} onClick={() => props.onClickPage(p)}
							className={props.page === p ? style.pageActive : style.usersPage}>{p}</span>)}

				{numberPortion < countPortiones && <div onClick={() => setNumberPortion(numberPortion + 1)} className={style.usersRightArrow}></div>}

			</div>
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