import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-small.png";

const BarraLateral = () => {
    return (
        <div className={"barraLateral" }>
            <img src={ Logo } className="logo"/>
            <Link to="/" className="link" >Início</Link>
            <Link to="/financa" className="link" >Finança</Link>
            <Link to="/escritorio" className="link" >Escritório</Link>
            <Link to="/processos" className="link" >Processo</Link>
        </div>
    )
};

export default BarraLateral;