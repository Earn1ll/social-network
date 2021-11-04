const Follow = 'Follow';
const Unfollow = 'Unfollow';
const Set_Users = 'Set_Users';
const Set_Current_Page = 'Set_Current_Page';
const Set_Total_Users_Count = 'Set_Total_Users_Count';
const Toggle_Is_Fetching = 'Toggle_Is_Fetching';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: Follow,
        userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: Unfollow,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: Set_Users,
        users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: Set_Current_Page,
        currentPage
    }
}
export const setUsersTotalCountAC = (totalUsersCount) => {
    return {
        type: Set_Total_Users_Count,
        count: totalUsersCount
    }
}
export const toggleIsFetchingAC = (isFetching) => {
    return {
        type: Toggle_Is_Fetching,
        isFetching
    }
}

export default usersReducer;