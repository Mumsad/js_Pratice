function SetUsername(username){
    //complex db callss
    this.username=username
}

function createUser(username,eamil, password){
    SetUsername(username)
    
    this.eamil=eamil
    this.password = password;
    // this.username
}

const shai = new createUser("chai","shai.com","123")

console.log(shai)