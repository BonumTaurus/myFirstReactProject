import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		myFriends: state.sidebar.myFriends
	}
}

export const SidebarContainer = connect(mapStateToProps)(Sidebar)