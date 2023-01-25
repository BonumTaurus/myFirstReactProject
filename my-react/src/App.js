import style from './App.module.css';
import { Header } from './components/Header/Header';
import { SidebarContainer } from './components/Sidebar/SidebarContainer';
import { Content } from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className={style.app}>
				<div className={style.app__container}>
					<div className={style.app__grid}>
						<Header />
						<SidebarContainer />
						<Content />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
