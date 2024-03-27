import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="text-slate-900 bg">
            <Outlet/>
        </div>
    );
};

export default Layout;