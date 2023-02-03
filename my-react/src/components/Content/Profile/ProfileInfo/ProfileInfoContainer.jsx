import { ProfileInfo } from "./ProfileInfo";
import { connect } from "react-redux";
import { requestStatus, requestUpdateStatus } from "../../../../redux/profile-reducer";
import { useEffect } from "react";

const ProfileInfoWrapper = (props) => {

	useEffect(() => {
		props.requestStatus(props.id)
	}, [props.status])

	return (
		<ProfileInfo {...props} />
	)
}


const mapStateToProps = (state) => {
	return {
		myProfile: state.auth.myProfile,
		id: state.auth.id,
		status: state.profilePage.profileStatus
	}
}

export const ProfileInfoContainer = connect(mapStateToProps, { requestStatus, requestUpdateStatus })(ProfileInfoWrapper)