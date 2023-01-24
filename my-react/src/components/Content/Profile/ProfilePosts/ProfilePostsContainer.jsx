import { connect } from "react-redux";
import { ProfilePosts } from "./ProfilePosts";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export const ProfilePostsContainer = connect(mapStateToProps, null)(ProfilePosts)