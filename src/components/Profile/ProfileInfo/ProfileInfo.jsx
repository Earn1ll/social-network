import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (<div className={'profile'}>
            <div>
                <img className={s.img} src={'https://i.pinimg.com/originals/ff/36/9c/ff369c3054cdd8250289529f69fc1990.jpg'}/>
            </div>
            <div className={s.discription}>
                Ava + discrption
            </div>

        </div>

    );
}
export default ProfileInfo;