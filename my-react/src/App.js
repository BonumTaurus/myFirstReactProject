import style from './App.module.css';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { SidebarContainer } from './components/Sidebar/SidebarContainer';
import { Content } from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {

	return (
		<BrowserRouter>
			<div className={style.app}>
				<div className={style.app__container}>
					<div className={style.app__grid}>
						<HeaderContainer />
						<SidebarContainer />
						<Content />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
