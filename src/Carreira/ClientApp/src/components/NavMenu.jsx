import { useState, useEffect } from "react";
import Restricted from "../utils/Restricted";
import { getCurrentUser, isAuthenticated, logout } from "../services/auth";

function NavMenu() {
    const [user, setUser] = useState(null);

    const onLogout = () => {
        logout();
        window.location.reload(true);
    }

    useEffect(() => {
        const currentUser = getCurrentUser();
        setUser(currentUser);
    }, []);

    return (
        <nav className="navbar">
            <a className="brand" href="/">Carreira</a>
            <ul className="nav-menu">
                {isAuthenticated() ? (
                    <>
                        <Restricted to={"Employer"}>
                            <li className="menu-item">
                                <a href="/publish">Anunciar Vaga</a>
                            </li>
                            <li className="menu-item">
                                <a href="/published-jobs">Meus Anúncios</a>
                            </li>
                        </Restricted>
                        <span className="menu-item">{user?.name}</span>
                        <li className="menu-item">
                            <a href="#" onClick={onLogout}>Sair</a>
                        </li>
                    </>
                ) : (
                        <li className="menu-item">
                            <a href="/account/signin">Login</a>
                        </li>
                    )
               }
            </ul>
        </nav>
    );
}

export default NavMenu;