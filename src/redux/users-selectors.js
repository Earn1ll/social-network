import {createSelector} from "reselect";



export const usersGetSelector = (state) => {
    return state.usersPage.users;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getUsersSuperSelector = createSelector(usersGetSelector,(users,isFetching) => {
    return  users.filter(u => true);
})

export const usersGet = (state) => {
    return usersGet(state).filter(u => true);
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
} 