import { Header } from './Header'
import { connect } from 'react-redux'
import { setAuthData } from '../../redux/auth-reducer'
import { setMyProfile } from '../../redux/profile-reducer'
import axios from 'axios'
import { useEffect } from 'react'
import { Preloader } from '../../Preloader/Preloader'

const HeaderWrapper = (props) => {

	useEffect(() => {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
			withCredentials: true
		}).then(response => {
			if (response.data.resultCode === 0) {
				let { id, email, login } = response.data.data
				props.setAuthData(id, email, login)

				axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
					props.setMyProfile(response.data)
				})
			}
		})
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
		myProfile: state.profilePage.myProfile
	}
}

export const HeaderContainer = connect(mapStateToProps, { setAuthData, setMyProfile })(HeaderWrapper)

