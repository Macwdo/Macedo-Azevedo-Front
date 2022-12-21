import "./Login.css"
export default function Login(){
    return (
        <div id='Login-principal'>
      
      <div id='form'>
      <input id="nome" placeholder='Insira seu nome'/>
        <input id="senha" placeholder='Insira sua senha'/>
        <button id="btn-enviar"  onClick={pegarDados}>Entrar</button>
      </div>
        
      
      </div>
    )

      async function pegarDados (){
      var inputNome = document.getElementById("nome");
      var inputSenha = document.getElementById("senha");
      var senha = inputSenha.value
      var nome = inputNome.value;
      const token = await get_jwt(nome, senha) ;
      console.log(token);
      alert(token);
    
      //var input = document. querySelector("#name");
      //var texto = input. value;
      //console. log(texto);
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
}