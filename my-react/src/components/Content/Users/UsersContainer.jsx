import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../../redux/users-reducer";
import { connect } from 'react-redux'
import { Users } from "./Users";

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow(userId) {
			dispatch(followActionCreator(userId))
		},
		unfollow(userId) {
			dispatch(unfollowActionCreator(userId))
		},
		setUsers(users) {
			dispatch(setUsersActionCreator(users))
		}
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)