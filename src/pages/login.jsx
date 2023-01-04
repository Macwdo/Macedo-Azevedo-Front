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
      const response = await get_jwt(nome, senha);
      if (response.ok){
        const token = await response.json().then(
          obj => {
            return obj;
          }
        )
        console.log(token)
        window.location.href = "home.jsx"
     } else {
      console.log("Senha incorreta")
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
          response => {
                return response
            }
        ).catch(
          error => {
            return error
          }
        )
        return token
    }
};

export default Login;
