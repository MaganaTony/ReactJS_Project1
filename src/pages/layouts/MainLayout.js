import React from "react";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function MainLayout() {
    return (
        <div className="MainLayout">
            <Navbar />
            <div className="d-flex flex-column min-vh-100">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}