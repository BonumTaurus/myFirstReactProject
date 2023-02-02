import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { newTextMessageActionCreater, addMessageActionCreator } from "../../../redux/dialogs-reducer";
import { withAuthorization } from "../../HOC/withAuthorization";

const DialogsWrapper = withAuthorization(Dialogs)

const mapStateToProps = (state) => {
	return {
		dialogsFriends: state.dialogsPage.dialogsFriends,
		dialogsMessages: state.dialogsPage.dialogsMessages,
		newTextMessage: state.dialogsPage.newTextMessage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changedMessage(textMessage) {
			dispatch(newTextMessageActionCreater(textMessage))
		},
		addMessage() {
			dispatch(addMessageActionCreator())
		}
	}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWrapper)