import React from "react";

const NovoProcesso = () => {
    return (
        <div className="novoProcesso">
            <form>
                <div className="firstSelection">
                    <div className="firstContainer">
                        <label >N° do Processo</label>
                        <input type="text" className="textInput"/>
                    </div>
                    <div className="secondContainer">
                        <label >Cliente</label>
                        <input type="text" />
                        <button>Novo</button>
                    </div>
                    <div className="secondContainer">
                        <label >Parte adversa</label>
                        <input type="text" />
                        <button>Novo</button>
                    </div>
                </div>
                <div className="secondSelection">
                        <div className="left">
                            <div className="autor-reu">
                                <button className="buttonAutor">Autor</button>
                                <button className="buttonReu">Réu</button>
                            </div>
                            <div className="selecaoAdvogado">
                                <div className="container">
                                <label>Advogado</label>
                                <button>Advogado</button>
                                </div>
                                <div className="container">
                                <label>Cliente de</label>
                                <button>Advogado</button>
                                </div>
                                <div className="container">
                                <label>Colaborador</label>
                                <button>Advogado</button>
                                </div>
                                <div className="container">
                                <label>Assunto</label>
                                <button>Direito Trabalhista</button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="firstContainer">
                                <label >Estado</label>
                                <input type="text" className="textInput"/>
                            </div>
                            <div className="firstContainer">
                                <label >Munícipio</label>
                                <input type="text" className="textInput"/>
                            </div>
                            <div className="firstContainer">
                                <label >Vara</label>
                                <input type="text" className="textInput"/>
                            </div>
                            <div className="firstContainer">
                                <label >N° da Vara</label>
                                <input type="text" className="textInput"/>
                            </div>
                        </div>
                    </div>
            </form>    
        </div>
    )
};

export default NovoProcesso;