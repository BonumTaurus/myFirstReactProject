import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";
import { Preloader } from '../../../../Preloader/Preloader'

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