import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img className={s.logo}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5vFX9tv64JjrobsjPi_62hz5WBWU0FXjfA&usqp=CAU'/>
        </header>
    );
}

export default Header;