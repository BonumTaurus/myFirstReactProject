import Users from './Users'
import { connect } from 'react-redux'
import {
	followActionCreator, unfollowActionCreator, setUsersActionCreator,
	setPageActionCreator, getTotalUsersActionCreator, isLoadingActionCreator
} from '../../../redux/users-reducer'
import axios from 'axios'
import { useEffect } from 'react'
import { Preloader } from '../../../Preloader/Preloader'

const UsersWrapper = (props) => {

	useEffect(() => {
		props.toggleLoading(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.page}&count=${props.countUsersOnPage}`).then(response => {
			props.toggleLoading(false)
			props.setUsers(response.data.items)
			props.getTotalUsers(response.data.totalCount)
		})
	}, [])

	let onClickPage = (p) => {
		props.toggleLoading(true)
		props.setPage(p)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.countUsersOnPage}`).then(response => {
			props.toggleLoading(false)
			props.setUsers(response.data.items)
		})
	}

	return (
		<>
			{props.isLoading && <Preloader />}
			<Users {...props} onClickPage={onClickPage} />
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
		isLoading: state.usersPage.isLoading
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
		},
		setPage: (page) => {
			dispatch(setPageActionCreator(page))
		},
		getTotalUsers: (countUsers) => {
			dispatch(getTotalUsersActionCreator(countUsers))
		},
		toggleLoading: (loading) => {
			dispatch(isLoadingActionCreator(loading))
		}
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersWrapper)

