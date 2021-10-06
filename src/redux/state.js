import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likes: 12},
                {id: 2, message: 'It\'s my first post', likes: 24},
                {id: 3, message: 'Nice to meet you!', likes: 32},
            ],
            newPostText: 'it-samurai',
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _collSubscriber() {
        console.log('da');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._collSubscriber = observer;
    },
    dispatch(action) { //{TYPE:'ADD-POST'}

        this._state.profilePage =  profileReducer(this._state.profilePage,action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar =  sidebarReducer(this._state.sidebar,action);
        this._collSubscriber(this._state);

    }
}



export default store;
window.store = store;