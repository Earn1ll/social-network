import React from "react";

import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleIsFollowingProgress,getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
   return {
       follow: (userId) => {
           dispatch(followAC(userId));
       },
       unfollow: (userId) => {
           dispatch(unfollowAC(userId));
       },
       setUsers: (users) => {
           dispatch(setUsersAC(users));
       },
       setCurrentPage: (pageNumber) => {
           dispatch(setCurrentPageAC(pageNumber));
       },
       setTotalUsersCount: (totalCount) => {
           dispatch(setUsersTotalCountAC(totalCount));
       },
       toggleIsFetching: (isFetching) => {
           dispatch(toggleIsFetchingAC(isFetching)) ;
       },
   }
} */




export default withAuthRedirect(connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers })
(UsersContainer));