import {usersAPI} from "../api/api";

const Add_Post = 'ADD-POST';
const Update_New_Post_Text = 'UPDATE-NEW-POST-TEXT';
const Set_User_Profile = 'Set_User_Profile';

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likes: 12},
        {id: 2, message: 'It\'s my first post', likes: 24},
        {id: 3, message: 'Nice to meet you!', likes: 32},
    ],
    newPostText: 'it-samurai',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0,
            };
            return  {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            };
        }
        case Update_New_Post_Text: {
            return  {
                ...state,
                newPostText: action.newText
            };
        }
        case Set_User_Profile: {
            return  {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: Add_Post
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: Update_New_Post_Text, newText: text}
}
export const setUserProfile = (profile) => {
    return {type: Set_User_Profile, profile}
}
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export default profileReducer;