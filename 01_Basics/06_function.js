const myFunction = function(){
    console.log("Hello world")
}
myFunction()
console.log(typeof myFunction)

//Stack memomry(Primitive) , Heap memory (Non-Primitive)

let myName = "harshittripathi"

let anothername = myName
anothername = "Harsh"
console.log(anothername)
console.log(myName)

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "harshit@gmail.com"
console.log(user1.email)
console.log(user2.email)