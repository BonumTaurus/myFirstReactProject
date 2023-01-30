import { Header } from './Header'
import { connect } from 'react-redux'
import { setAuthData } from '../../redux/auth-reducer'
import axios from 'axios'
import { useEffect } from 'react'

const HeaderWrapper = (props) => {

	useEffect(() => {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
			withCredentials: true
		}).then(response => {
			if (response.data.resultCode === 0) {
				let { id, email, login } = response.data.data
				props.setAuthData(id, email, login)
			}
		})
	}, [props.login])

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

export const HeaderContainer = connect(mapStateToProps, { setAuthData })(HeaderWrapper)

