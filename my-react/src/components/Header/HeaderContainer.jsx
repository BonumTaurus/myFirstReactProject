import { Header } from './Header'
import { connect } from 'react-redux'
import { requestAuthMe } from '../../redux/auth-reducer'
import { useEffect } from 'react'

const HeaderWrapper = (props) => {

	useEffect(() => {
		props.requestAuthMe()
	}, [props.login])

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

