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
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/processos" element={<Processos />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routering;