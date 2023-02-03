
function NavMenu() {
    return (
        <nav className="navbar">
            <a className="brand" href="/">Carreira</a>
            <ul className="nav-menu">
                <li className="menu-item">
                    <a href="/publish">Anunciar Vaga</a>
                </li>
                <li className="menu-item">
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;