const axios = require('axios');
class Creds{
  constructor(creds){
      this.uname = creds.uname;
      this.pass = creds.pass;
  }
  isValidLogin(){
 
    var send_data = {
        email: this.uname,
        password: this.pass
    }
    axios.post('http://34.230.28.181:3000/bookie_merchant/login',send_data)
        .then(function(resp){
            console.log("resp=====> ",resp);
        })
        .catch(function(error){
            console.log("error=====>  ",error);
        })
  }
}
export default Creds;
