import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";

function Layout() {
    return (
        <>
            <NavMenu />
            <main className="main">
                <div className="wrapper">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default Layout;