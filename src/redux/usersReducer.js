import {usersAPI} from "../api/api";

const Follow = 'Follow';
const Unfollow = 'Unfollow';
const Set_Users = 'Set_Users';
const Set_Current_Page = 'Set_Current_Page';
const Set_Total_Users_Count = 'Set_Total_Users_Count';
const Toggle_Is_Fetching = 'Toggle_Is_Fetching';
const Toggle_Is_Following_Progress = 'Toggle_Is_Following_Progress';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case Unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
        case Set_Users: {
            return {
                ...state,
                users: action.users
            }
        }
        case Set_Current_Page: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case Set_Total_Users_Count: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case Toggle_Is_Fetching: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case Toggle_Is_Following_Progress: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress,action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: Follow,
        userId
    }
}
export const unfollowSuccess = (userId) => {
    return {
        type: Unfollow,
        userId
    }
}
export const setUsers = (users) => {
    return {
        type: Set_Users,
        users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: Set_Current_Page,
        currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: Set_Total_Users_Count,
        count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: Toggle_Is_Fetching,
        isFetching
    }
}
export const toggleIsFollowingProgress = (isFetching,userId) => {
    return {
        type: Toggle_Is_Following_Progress,
        isFetching,
        userId
    }
}

export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;