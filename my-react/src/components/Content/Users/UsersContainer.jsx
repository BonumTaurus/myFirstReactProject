import Users from './Users'
import { connect } from 'react-redux'
import {
	follow, unfollow, setUsers, setPage, getTotalUsers, toggleLoading, inProgressFollowing
} from '../../../redux/users-reducer'
import axios from 'axios'
import { useEffect } from 'react'
import { Preloader } from '../../../Preloader/Preloader'

const UsersWrapper = (props) => {

	useEffect(() => {
		props.toggleLoading(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.page}&count=${props.countUsersOnPage}`, {
			withCredentials: true
		}).then(response => {
			props.toggleLoading(false)
			props.setUsers(response.data.items)
			props.getTotalUsers(response.data.totalCount)
		})
	}, [])

	let onClickPage = (p) => {
		props.toggleLoading(true)
		props.setPage(p)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.countUsersOnPage}`, {
			withCredentials: true
		}).then(response => {
			props.toggleLoading(false)
			props.setUsers(response.data.items)
		})
	}

	let onFollowClick = (userId) => {
		props.inProgressFollowing(true, userId)
		axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
			withCredentials: true
		}).then(response => {
			if (response.data.resultCode === 0) {
				props.follow(userId)
			}
			props.inProgressFollowing(false, userId)
		})
	}

	let onUnfollowClick = (userId) => {
		props.inProgressFollowing(true, userId)
		axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
			withCredentials: true
		}).then(response => {
			if (response.data.resultCode === 0) {
				props.unfollow(userId)
			}
			props.inProgressFollowing(false, userId)
		})
	}

	return (
		<>
			{props.isLoading && <Preloader />}
			<Users {...props} onClickPage={onClickPage}
				onFollowClick={onFollowClick} onUnfollowClick={onUnfollowClick} />
		</>
	)
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsers: state.usersPage.totalUsers,
		countUsersOnPage: state.usersPage.countUsersOnPage,
		page: state.usersPage.page,
		portionSize: state.usersPage.portionSize,
		isLoading: state.usersPage.isLoading,
		inProgressUserId: state.usersPage.inProgressUserId
	}
}

export const UsersContainer = connect(mapStateToProps,
	{ follow, unfollow, setUsers, setPage, getTotalUsers, toggleLoading, inProgressFollowing })(UsersWrapper)

