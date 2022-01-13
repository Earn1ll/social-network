import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import  ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
              {/* <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>    */}
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large} />
                </div>
                <ProfileStatus status = {"Hello my friend!"}/>
            </div>
        </div>
    )
}
export default ProfileInfo;