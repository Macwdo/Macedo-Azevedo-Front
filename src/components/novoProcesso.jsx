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
                <div className="observacoes">
                    <label>Observações</label>
                    <textarea rows="6"></textarea>
                </div>
                <div className="honorarios">
                    <div className="valor">
                        <label>Honorários</label>
                        <input type="number" />
                    </div>
                    <div className="tempo">
                        <div className="date">
                            <label>Inicio</label>
                            <input type="date" className="date-input"/>
                        </div>
                        <div className="date">
                            <label>Conclusão</label>
                            <input type="date" className="date-input"/>
                        </div>
                    </div>
                </div>
                <div className="lastSelection">
                    <label className="arquivos">Adicionar arquivos</label>
                    <button className="botao">Criar Processo</button>
                </div>
            </form>    
        </div>
    )
};

export default NovoProcesso;