import style from './App.module.css';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { SidebarContainer } from './components/Sidebar/SidebarContainer';
import { Content } from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Preloader } from './Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';

const App = (props) => {

	useEffect(() => {
		props.initializeApp()
	}, [props.initialized])

	if (!props.initialized) {
		return <Preloader />
	}

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

const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}

export default connect(mapStateToProps, { initializeApp })(App);
