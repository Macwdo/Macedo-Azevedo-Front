import "./Login.css"
export default function Login(){
    return (
        <div id='Login-principal'>
      <form>
        <input id="nome" placeholder='Insira seu nome'/>
        <input id="senha" placeholder='Insira sua senha'/>
        <button id="btn-enviar" type='submit'>Entrar</button>
      </form>
      </div>
    )

}