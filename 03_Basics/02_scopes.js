let a= 300
if(true){
let a = 1
const b = 2
var c = 3
console.log("Inner loop : ", a)
}

console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "Harshit"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

function addone(num){
    return num + 1
}
console.log(addone(5))



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))
