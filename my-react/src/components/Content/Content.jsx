import style from './Content.module.css';
import { Profile } from './Profile/Profile';
import { Dialogs } from './Dialogs/Dialogs';

const Content = () => {
	return (
		<div className={style.content}>
			{/* <Profile /> */}
			<Dialogs />
		</div>
	)
}

export { Content };