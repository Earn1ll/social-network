import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const Set_User_Data = 'Set_User_Data';
const Unfollow = 'Unfollow';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Set_User_Data:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId,email,login,isAuth) => {
    return {
        type: Set_User_Data,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data;
                dispatch(setAuthUserData(id,email,login,true));
            }
        });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));

            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;