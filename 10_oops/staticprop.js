class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

  static  createId(){
        return `123`
    }
}

const harshit = new User("harshit")

console.log(harshit.createId())