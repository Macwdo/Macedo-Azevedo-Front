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
            <div className="containerHome">
                <p className="textoCabecalhoProcesso">Processo: <span className="textoAzul">53</span></p>
                <p className="textoCabecalhoHonorario">Honorários em <span className="textoAzul">R$ 1.000.000,00</span></p>

                <button onClick={() => setNovoProcesso(true)} className="newProcess">Novo Processo</button>
                {novoProcesso ? 
                <Modal onClose={() => setNovoProcesso(false)}>
                    <NovoProcesso />
                </Modal> 
                    : null}
                
                <div className="sair">
                    <Link className="linkSair">Sair</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;