class UserAuth {

    constructor (){
        
    }

    verify () {
        const token = localStorage.getItem('Authorization')
        if (token === null) return false;
        return true;
    }

    async request() {
      const URL = "https://gordinho.macedoweb.com.br/api/verify/"
      const token = localStorage.getItem('Authorization')
      if(!token) return false;
      const headers = {
          'Content-Type': 'application/json'
      };
      
      token = token.split(' ')
      const body = JSON.stringify({
          'token': token[1]
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

}

export default UserAuth;