import style from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';

const App = () => {
	return (
		<div className={style.app}>
			<div className={style.app__container}>
				<div className={style.app__grid}>
					<Header />
					<Sidebar />
					<Content />
				</div>
			</div>
		</div>
	);
}

export default App;
