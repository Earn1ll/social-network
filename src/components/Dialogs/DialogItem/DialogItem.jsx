import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.image} src={'https://lapkins.ru/upload/iblock/130/1309222f033fb6928ea065578276ab44.jpg'}/>
            <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;