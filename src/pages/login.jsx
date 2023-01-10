import React from "react";
import imageLogin from "../img/imageLogin.png"

const Login = () => {
    return (
        <body>
        <div className="containerLogin">
            <div className='login'>
            <img className="imageLogin" src={imageLogin} alt="logo"/>
                <div className="form">
                    <label className="labelNome">Nome</label>
                    <input className="nome" type='text' placeholder="Digite seu usuario"/>
                    <label className="labelSenha">Senha</label>
                    <input className="senha" type="password" placeholder="Digite sua senha"/>
                    <button className="btn-enviar" type="submit" onClick={main}>Entrar</button>
                </div>
            </div>
        </div>
        </body>
    )

}

const form = document.querySelector('.form')
const URL = 'https://gordinho.macedoweb.com.br/api/token/'
const URLPr = 'https://gordinho.macedoweb.com.br/api/verify/'


async function main () {
  const username = document.querySelector('.nome')
  const password = document.querySelector('.senha') 
  
  const response = await getRequest(username.value, password.value)
  if(response.ok){
    const token = await response.json();
    localStorage.setItem('Authorization', `Bearer ${token.access}` )
    window.location.href = 'home.jsx'
  }else {
      const error = document.querySelector('.error-text') === null ? true: false;
      if (error){
        errorMessage(password, 'Credenciais Invalidas');
      }
  }
}


function errorMessage(field, message){
  const div = document.createElement("div");
  div.innerHTML = message;
  div.classList.add("error-text")
  field.insertAdjacentElement('afterend', div)
}

async function getRequest(username, password){
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
  
  const request = fetch(URL, config).then(
    response => {
      return response;
    }
  )
  return request;
}

export default Login;