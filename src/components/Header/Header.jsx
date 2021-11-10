import s from './Header.module.css';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return(
        <header className={s.header}>
            <img className={s.logo} src={logo}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink className={s.link} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;