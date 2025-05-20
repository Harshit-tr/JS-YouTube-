//Singleton
// Object.create

// Object Literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Harshit",
    [mySym] : "mykey1",
    age : 20,
    location : "sasaram",
    email : "harshit@google.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])

// Object.freeze(jsUser)
jsUser.email = "harshti@123gmail.com"
console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello js User")
}

jsUser.greeting2 = function(){
console.log(`Hello js user ${this.name}`)
}

console.log(jsUser.greeting2())