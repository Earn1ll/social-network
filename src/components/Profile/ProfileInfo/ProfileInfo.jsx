import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile){
        return  <Preloader/>
    }

    return (<div className={'profile'}>
            <div>
                <img className={s.img} src={'https://i.pinimg.com/originals/ff/36/9c/ff369c3054cdd8250289529f69fc1990.jpg'}/>
            </div>
            <div className={s.discription}>
                <img src={props.profile.photos.large}/>
            </div>

        </div>

    );
}
export default ProfileInfo;