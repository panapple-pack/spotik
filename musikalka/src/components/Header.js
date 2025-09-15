import {useState} from 'react';
import './Header.css';

// Компонент - это просто функция которая возвращает JSX
function Header() {
    const websiteTitle = "MusicMuzon";
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function HandleLoginClick() {
        setIsLoggedIn(!isLoggedIn);
    }

    return(
        <header className="header">
            <div className="logo">{websiteTitle}</div>
            <button className="login-btn" onClick={HandleLoginClick}>
                {isLoggedIn ? 'Выйти' : 'Войти'}
            </button>
        </header>
    );
}

export default Header;