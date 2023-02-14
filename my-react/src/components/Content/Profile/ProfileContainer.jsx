import { Profile } from "./Profile";
import { withAuthorization } from "../../HOC/withAuthorization";

const ProfileContainer = withAuthorization(Profile)

export default ProfileContainer 