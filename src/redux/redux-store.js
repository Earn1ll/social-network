import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);



export default store;