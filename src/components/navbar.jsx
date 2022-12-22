import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import NovoProcesso from "./novoProcesso";

const Navbar = () => {

    const [novoProcesso, setNovoProcesso] = useState(false);

    return (
        <div className="navbar">
            <div className="container">
                <span>Olá Dr(a). Advogado</span>
                <button onClick={() => setNovoProcesso(true)}>Novo Processo</button>
                {novoProcesso ? 
                <Modal onClose={() => setNovoProcesso(false)}>
                    <NovoProcesso />
                </Modal> 
                    : null}
                <Link >Eu</Link>
                <Link >Sair</Link>
            </div>
        </div>
    );
};

export default Navbar;