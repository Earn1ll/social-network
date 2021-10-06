const Update_New_Message_Body = 'UPDATE-NEW-MESSAGE-BODY';
const Send_Message = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case Update_New_Message_Body:  state.newMessageBody = action.body;
                return state;
        case Send_Message:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:7,message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: Send_Message
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return { type: Update_New_Message_Body, body: body }
}


export default dialogsReducer;