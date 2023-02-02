import style from './Header.module.css'
import logo_header from '../../images/rocket.webp'
import myAva from '../../images/myAva.jpg'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.header__logo}>
				<img src={logo_header}></img>
			</div>
			<div className={style.header__login}>
				{props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'}><span>Login page</span></NavLink>}
			</div>
		</header>
	)
}

export { Header };