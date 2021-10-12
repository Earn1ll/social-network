const Update_New_Message_Body = 'UPDATE-NEW-MESSAGE-BODY';
const Send_Message = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Helg'},
        {id: 2, name: 'Android'},
        {id: 3, name: 'Vitold'},
        {id: 4, name: 'Denchik'},
        {id: 5, name: 'Artemold'},
        {id: 6, name: 'Dimonchik'}
    ],
    messages: [
        {id: 1, message: 'Hey!'},
        {id: 2, message: 'How is your progress?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Great!'}
    ],
    newMessageBody: ""
}

const dialogsReducer = ( state= initialState, action) => {

    switch (action.type) {
        case Update_New_Message_Body:
        return {
                ...state,
                newMessageBody: action.body
            };
        case Send_Message:
            let body = state.newMessageBody;
            return  {
                ...state,
                messages:[...state.messages,{id:7,message: body}],
                newMessageBody: ''
            };
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