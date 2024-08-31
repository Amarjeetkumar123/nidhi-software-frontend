import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;