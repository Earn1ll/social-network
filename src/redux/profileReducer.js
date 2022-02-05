import {profileAPI, usersAPI} from "../api/api";

const Add_Post = 'ADD-POST';
const Set_User_Profile = 'Set_User_Profile';
const Set_Status = 'Set_Status';

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likes: 12},
        {id: 2, message: 'It\'s my first post', likes: 24},
        {id: 3, message: 'Nice to meet you!', likes: 32},
    ],
    profile: null,
    stasus: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likes: 0,
            };
            return  {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            };
        }
        case Set_User_Profile: {
            return  {
                ...state,
                profile: action.profile
            };
        }
        case Set_Status: {
            return  {
                ...state,
                stasus: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: Add_Post,newPostText
    }
}

export const setStatus = (status) => ({type: Set_Status, status})

export const setUserProfile = (profile) => {
    return {type: Set_User_Profile, profile}
}
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
            }
        });
}

export default profileReducer;