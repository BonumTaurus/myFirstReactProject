import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";
import { Preloader } from '../../../../Preloader/Preloader'

const ProfileInfoWrapper = (props) => {

	if (!props.myProfile) {
		return <Preloader />
	}

	return (
		<ProfileInfo {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		myProfile: state.profilePage.myProfile
	}
}

export const ProfileInfoContainer = connect(mapStateToProps, null)(ProfileInfoWrapper)