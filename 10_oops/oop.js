// const user = {
//     username: "harshit",
//     loginCount: 123
// }

// console.log(user.username);


function user(username , loginCount , isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new user("Harshit",12,true)
const userTwo =new user("Harshi",13,true)
console.log(userOne.constructor)