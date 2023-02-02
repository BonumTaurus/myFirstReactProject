import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";

const ProfileInfoWrapper = (props) => {

	return (
		<ProfileInfo {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		myProfile: state.auth.myProfile
	}
}

export const ProfileInfoContainer = connect(mapStateToProps, null)(ProfileInfoWrapper)