import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true

            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId,email,login) => {
    return {
        type: Set_User_Data,
        data: {
            userId,
            email,
            login
        }
    }
}
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data;
                dispatch(setAuthUserData(id,email,login));
            }
        });
}

export default authReducer;