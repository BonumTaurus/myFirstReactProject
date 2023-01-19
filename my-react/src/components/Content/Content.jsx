import style from './Content.module.css';
import { Profile } from './Profile/Profile';

const Content = () => {
	return (
		<div className={style.content}>
			<Profile />
		</div>
	)
}

export { Content };