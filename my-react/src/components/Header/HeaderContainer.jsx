import { Header } from './Header'
import { connect } from 'react-redux'
import { requestAuthMe } from '../../redux/auth-reducer'
import { useEffect } from 'react'
import { Preloader } from '../../Preloader/Preloader'

const HeaderWrapper = (props) => {

	useEffect(() => {
		props.requestAuthMe()
	}, [props.login])

	if (!props.myProfile) {
		return <Preloader />
	}

	return (
		<Header {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		myProfile: state.auth.myProfile
	}
}

export const HeaderContainer = connect(mapStateToProps, { requestAuthMe })(HeaderWrapper)

