import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { newTextMessageActionCreater, addMessageActionCreator } from "../../../redux/dialogs-reducer";

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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)