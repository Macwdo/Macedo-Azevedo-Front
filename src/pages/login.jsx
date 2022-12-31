import React from "react";
import imageLogin from "../img/imageLogin.png"

const Login = () => {
    return (
        <body>
        <div className="container">
            <div className='login'>
            <img className="imageLogin" src={imageLogin} alt="logo"/>
                <div className='form'>
                    <label className="labelNome">Nome</label>
                    <input className="nome" type='text'/>
                    <label className="labelSenha">Senha</label>
                    <input className="senha" type="text" />
                    <button className="btn-enviar"  onClick={pegarDados}>Entrar</button>
                </div>
            </div>
        </div>
        </body>
    )

    async function pegarDados (){
      var inputNome = document.getElementsByClassName("nome");
      var inputSenha = document.getElementsByClassName("senha");
      var senha = inputSenha[0].value
      var nome = inputNome[0].value
      const token = await get_jwt(nome, senha);
      console.log(token);
      function getStatusCode(response) {
        return response.status;
      }
      try {
        const response = await fetch('https://gordinho.macedoweb.com.br/api/token/');
        const statusCode = getStatusCode(response);
        console.log(statusCode); 
        if (statusCode === 200) {
          window.location.href = ("home.jsx");
        }
      } catch (error) {
        console.error(error);
      }
      }

      async function get_jwt(username, password) {

        const headers = {
        'Content-Type': 'application/json'
        };
    
        const body = JSON.stringify({
          "username": `${username}`,
          "password": `${password}`
      })
    
        const config = {
            method: 'POST',
            headers: headers,
            body: body
        }

        const token = await fetch('https://gordinho.macedoweb.com.br/api/token/', config).then(
            objects => {
                return objects.json()
            }
        )
        return token
    }
};

export default Login;
