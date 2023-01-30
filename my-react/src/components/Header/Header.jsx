import style from './Header.module.css'
import logo_header from '../../images/rocket.webp'
import myAva from '../../images/myAva.jpg'

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.header__logo}>
				<img src={logo_header}></img>
			</div>
			<div className={style.header__login}>
				{props.myProfile.photos.large === null ? <img src={myAva}></img> :
					props.myProfile.photos.large}
				{props.isAuth ? <span>{props.login}</span> : <span>Login page</span>}
			</div>
		</header>
	)
}

export { Header };