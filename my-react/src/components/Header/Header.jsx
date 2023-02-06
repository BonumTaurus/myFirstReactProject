import style from './Header.module.css'
import logo_header from '../../images/rocket.webp'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.header__logo}>
				<img src={logo_header}></img>
			</div>
			<div className={style.header__login}>
				{props.isAuth ? <div><button onClick={props.deleteLogin}>logout</button><span>{props.login}</span></div> :
					<NavLink to={'/login'}><span>Login page</span></NavLink>}
			</div>
		</header>
	)
}

export { Header };