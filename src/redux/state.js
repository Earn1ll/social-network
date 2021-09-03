import {reRenderEntireTree} from "../render";


let state = {
    profilePage:{
       posts: [
            {id: 1, message: 'Hi,how are you?', likes: 12},
            {id: 2, message: 'It\'s my first post', likes: 24},
            {id: 3, message: 'Nice to meet you!', likes: 32},
        ],
    },
    dialogsPage:{
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likes: 0,
    }
    state.profilePage.posts.push(newPost);
    reRenderEntireTree(state);
}

export default state;