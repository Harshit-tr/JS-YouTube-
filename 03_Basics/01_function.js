// const sayMyName = function sayMyName(){
//     let name = Array.from("Harshit")
//     for(let i= 0; i< name.length; i++){
//         console.log(name[i])
//     }
//     return name
// }

// console.log(sayMyName())


// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1 , num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}
// /
// console.log(addTwoNumbers(1,2))

function loginUserMessage(username){
    if(!undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harshit"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))

const user = {
    username : "harshit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)