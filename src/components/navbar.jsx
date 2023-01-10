import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import NovoProcesso from "./novoProcesso";
import BarraLateral from "./barralateral";

const Navbar = () => {

    const [novoProcesso, setNovoProcesso] = useState(false);

    return (
        <>
            <BarraLateral/>
            <div className="navbar">
            <div className="container">
                <p className="textoCabecalho">Processo: <span className="textoAzul">53</span></p>
                <p className="textoCabecalho">Honorários em <span className="textoAzul">R$ 1.000.000,00</span></p>

                <button onClick={() => setNovoProcesso(true)} className="botao">Novo Processo</button>
                {novoProcesso ? 
                <Modal onClose={() => setNovoProcesso(false)}>
                    <NovoProcesso />
                </Modal> 
                    : null}
                
                <div className="sair">
                    <Link className="link">Sair</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;