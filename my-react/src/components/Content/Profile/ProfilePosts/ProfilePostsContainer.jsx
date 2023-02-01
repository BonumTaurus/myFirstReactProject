import { connect } from "react-redux";
import { ProfilePosts } from "./ProfilePosts";
import { changePostText, addPost } from "../../../../redux/profile-reducer";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

export const ProfilePostsContainer = connect(mapStateToProps, { changePostText, addPost })(ProfilePosts)