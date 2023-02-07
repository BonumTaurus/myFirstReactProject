import { connect } from "react-redux";
import { ProfileUser } from "./ProfileUser";
import { setProfileUser } from "../../../redux/profileUser-reducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Preloader } from "../../../Preloader/Preloader";
import { withAuthorization } from '../../HOC/withAuthorization'

const ProfileUserWrapper = (props) => {

	let params = useParams()

	useEffect(() => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
			.then(response => {
				props.setProfileUser(response.data)
			})
	}, [params.userId])

	if (!props.profileUser) {
		return <Preloader />
	}

	return (
		<ProfileUser {...props} />
	)
}


const mapStateToProps = (state) => {
	return {
		profileUser: state.profileUser.profileUser
	}
}

export const ProfileUserContainer = connect(mapStateToProps, { setProfileUser })(ProfileUserWrapper)