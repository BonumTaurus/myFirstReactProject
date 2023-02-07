import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'


const mapStateToPropsForAuth = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}



export const withAuthorization = (Component) => {
	let withAuthorizationWrapper = (props) => {

		if (!props.isAuth) {
			return <Navigate replace to='/login' />
		}

		return (
			<Component {...props} />
		)
	}

	let withAuthorizationContainer = connect(mapStateToPropsForAuth, null)(withAuthorizationWrapper)

	return withAuthorizationContainer
}