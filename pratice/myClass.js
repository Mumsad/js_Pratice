class User{
    constructor (userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password; 

    }

    encryptPassword(){
        return `${this.password}abc`
    }
    chaingUsername(){
        return `${this.userName.toUpperCase()}`
    }
}

// const chai =new User("chai ", "shiak@gamil.com", "1223")

// console.log(chai.encryptPassword());
// console.log(chai.chaingUsername());


// behind the scene

function user(userName,eamil, password){
    this.userName = userName;
    this.email = email;
    this.password = password; 

}

user.prototype.encryptPassword=function(){
    return `${this.password}abc`
     
}
user.prototype.changePassword=function(){
    return `${this.userName.toUpperCase()}abc`    
}

const tea = new User("tesa","tease","1223")

console.log(tea.encryptPassword());