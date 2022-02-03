
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status = {props.status} updateStatus ={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;