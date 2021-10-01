
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
        },
    },
    getState(){
        return this._state
    },
    _collSubscriber() {
        console.log('da');
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._collSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._collSubscriber(this._state);

    },
    subscribe(observer){
        this._collSubscriber = observer;
    },
}


export default store;
window.store =store;