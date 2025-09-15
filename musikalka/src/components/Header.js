import './Header.css';

// Компонент - это просто функция которая возвращает JSX
function Header() {
    const websiteTitle = "MusicMuzon";
    const currentUser = {
        name: "Oleg",
        isLoggedIn: false
    };

    function HandleLoginClick() {
        alert(currentUser.isLoggedIn ? 'До свидания!' : 'Добро пожаловать!');
    }

    return(
        <header className="header">
            <div className="logo">{websiteTitle}</div>
            <button className="login-btn" onClick={HandleLoginClick}>
                {currentUser.isLoggedIn ? 'Выйти' : 'Войти'}
            </button>
        </header>
    );
}

export default Header;