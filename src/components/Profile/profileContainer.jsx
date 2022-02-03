import Profile from "./profile";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
            //13846 less 73(status)
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status ={this.props.stasus} updateStatus={this.props.updateStatus}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    stasus: state.profilePage.stasus
});

export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);





