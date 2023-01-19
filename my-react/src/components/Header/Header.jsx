import style from './Header.module.css'
import logo_header from '../../images/rocket.webp'

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.header__logo}>
				<img src={logo_header}></img>
			</div>
		</header>
	)
}

export { Header };