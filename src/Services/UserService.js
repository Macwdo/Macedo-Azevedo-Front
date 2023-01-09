class UserAuth {

    constructor (){
        
    }

    async verify() {
        const token = localStorage.getItem('Authorization')
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
        
        const request = fetch(URLPr, config).then(
            response => {
            return response;
            }
        )
        
        return request;
        
    }

    async getRequest(username, password){
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

}

export default UserAuth;