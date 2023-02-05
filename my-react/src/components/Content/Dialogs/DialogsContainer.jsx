import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { addMessageActionCreator } from "../../../redux/dialogs-reducer";
import { withAuthorization } from "../../HOC/withAuthorization";

const DialogsWrapper = withAuthorization(Dialogs)

const mapStateToProps = (state) => {
	return {
		dialogsFriends: state.dialogsPage.dialogsFriends,
		dialogsMessages: state.dialogsPage.dialogsMessages
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage(messageText) {
			dispatch(addMessageActionCreator(messageText))
		}
	}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWrapper)