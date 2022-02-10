
import {getAuthUserData} from "./AuthReducer";

const Initialized_Success = 'Initialized_Success';


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case Initialized_Success:
            return {
                ...state,
                initialized:true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: Initialized_Success});
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then( () => {
            dispatch(initializedSuccess());
    });
}


export default appReducer;