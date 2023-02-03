import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <NavMenu />
            <div className="wrapper">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;