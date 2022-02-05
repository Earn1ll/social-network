
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
    ]
}

const dialogsReducer = ( state= initialState, action) => {

    switch (action.type) {
        case Send_Message:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages:[...state.messages,{id:7,message: body}]

            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: Send_Message,newMessageBody
    }
}


export default dialogsReducer;