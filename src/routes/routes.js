import React from "react";
import { 
    BrowserRouter, 
    Routes,
    Route,
    Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/home";
import Footer from "../components/footer";
import Login from "../pages/login";
import Processos from "../pages/processos";
import ProtectedRoutes from "./ProtectedRoutes";

const Layout = () => {
    return(
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

const Routering = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/" element={
                    <ProtectedRoutes>
                        <Layout/>
                        <Home />
                    </ProtectedRoutes>
                    }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routering;