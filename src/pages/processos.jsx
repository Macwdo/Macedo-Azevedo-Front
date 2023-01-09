import React from "react";

const Processos = () => {
    return (
        <div className="processos">
            <h1>
                Aqui é o processo
            </h1>
            <input type="button" value="Clica" onClick={main} />
            Processos
        </div>
    );
};



async function main () {
    const response = await getProcessos('processo')
    console.log(response)
}

async function getProcessos(urlName){
    const url = `https://gordinho.macedoweb.com.br/api/v1/${urlName}/`
    const token = localStorage.getItem("Authorization") 

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    };
  
    const config = {
        method: 'GET',
        headers: headers
    }
    
    const request = fetch(url, config).then(
      response => {
        return response.json();
      }
    )
    return request;
  }

export default Processos;