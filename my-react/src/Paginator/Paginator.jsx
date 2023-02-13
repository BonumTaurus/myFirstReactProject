import style from './Paginator.module.css'
import { useState } from 'react'

const Paginator = (props) => {

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
		<div className={style.usersPaginator}>

			{numberPortion > 1 && <div onClick={() => setNumberPortion(numberPortion - 1)} className={style.usersLeftArrow}></div>}

			{pages.filter(p => p >= leftNumberPortion && p <= rightNumberPortion)
				.map((p, index) =>
					<span key={index} onClick={() => props.onClickPage(p)}
						className={props.page === p ? style.pageActive : style.usersPage}>{p}</span>)}

			{numberPortion < countPortiones && <div onClick={() => setNumberPortion(numberPortion + 1)} className={style.usersRightArrow}></div>}

		</div>
	)
}

export { Paginator }
