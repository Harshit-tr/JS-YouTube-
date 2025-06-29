class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com","123")

//behind the scene

function user(username, email, password) {
    this.username = username;
        this.email = email;
        this.password = password;
}


user.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

const tea = new User("tea", "tea@gmail.com","123")
