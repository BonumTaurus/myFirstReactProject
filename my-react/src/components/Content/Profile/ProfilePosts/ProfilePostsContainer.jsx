import { connect } from "react-redux";
import { ProfilePosts } from "./ProfilePosts";
import { addPost, deletePost, selectSort } from "../../../../redux/profile-reducer";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts
	}
}

export const ProfilePostsContainer = connect(mapStateToProps, { addPost, deletePost, selectSort })(ProfilePosts)