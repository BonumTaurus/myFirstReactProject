import preloader from '../images/loader.gif'
import style from './Preloader.module.css'

const Preloader = (props) => {
	return (
		<div className={style.preloader}>
			<img src={preloader} ></img>
		</div>
	)
}

export { Preloader }

