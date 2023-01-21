import style from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className={style.app}>
				<div className={style.app__container}>
					<div className={style.app__grid}>
						<Header />
						<Sidebar myFriends={props.myFriends} />
						<Content dialogsFriends={props.dialogsFriends} dialogsMessages={props.dialogsMessages} posts={props.posts} />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
