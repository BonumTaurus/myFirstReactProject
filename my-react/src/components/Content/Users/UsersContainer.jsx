import Users from './Users'
import { connect } from 'react-redux'
import {
	requestUsers, requestUsersOnPage, requestOnFollow, requestOnUnfollow
} from '../../../redux/users-reducer'
import { useEffect } from 'react'
import { Preloader } from '../../../Preloader/Preloader'

const UsersWrapper = (props) => {

	useEffect(() => {
		props.requestUsers(props.page, props.countUsersOnPage)
	}, [])

	let onClickPage = (p) => {
		props.requestUsersOnPage(p, props.countUsersOnPage)
	}

	let onFollowClick = (userId) => {
		props.requestOnFollow(userId)
	}

	let onUnfollowClick = (userId) => {
		props.requestOnUnfollow(userId)
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
	{ requestUsers, requestUsersOnPage, requestOnFollow, requestOnUnfollow })(UsersWrapper)

