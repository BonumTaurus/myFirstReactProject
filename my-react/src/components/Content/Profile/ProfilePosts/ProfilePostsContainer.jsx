import { connect } from "react-redux";
import { ProfilePosts } from "./ProfilePosts";
import { changePostActionCreator, addPostActionCreator } from "../../../../redux/profile-reducer";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changedText: (newText) => {
			dispatch(changePostActionCreator(newText))
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		}
	}
}

export const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)