import { Header } from './Header'
import { connect } from 'react-redux'
import { deleteLogin } from '../../redux/auth-reducer'

const HeaderWrapper = (props) => {

	return (
		<Header {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export const HeaderContainer = connect(mapStateToProps, { deleteLogin })(HeaderWrapper)

