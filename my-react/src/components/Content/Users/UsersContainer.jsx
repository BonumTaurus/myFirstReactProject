import Users from './Users'
import { connect } from 'react-redux'
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../../redux/users-reducer'
import axios from 'axios'
import { useEffect } from 'react'

const UsersWrapper = (props) => {

	useEffect(() => {
		axios.get('https://social-network.samuraijs.com/api/1.0/users?page2&count=5').then(response => {
			props.setUsers(response.data.items)
		})
	}, [])

	return (
		<Users {...props} />
	)
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followActionCreator(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowActionCreator(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users))
		}
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersWrapper)

