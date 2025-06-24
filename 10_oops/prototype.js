let myName = "Harshit     "
console.log(myName.truelength);



let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.Harshit = function(){
    console.log(`Harshit is present in all object`);
    
}

// heroPower.Harshit()
const User = {
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    makevideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'js Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

//modern 

Object.setPrototypeOf(TeachingSupport, Teacher) 

let anotherUsername = "ChaiAurCOde    "
String.prototype.truelength = function(){
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherUsername.truelength()

