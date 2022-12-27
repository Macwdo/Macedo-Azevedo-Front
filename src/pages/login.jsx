import React from "react"

const Login = () => {
    return (
        <body>
        <div className="container">
            <div className='login'>
                <div className='form'>
                    <label className="labelNome">Nome</label>
                    <input className="nome" type='text'/>
                    <label className="labelSenha">senha</label>
                    <input className="senha" type="password" />
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
