//arrays
const myArr = [0,1,2,3,4,5,6,7]

const myHeros = ["shaktiman",'naagraj']

const myArray2 = new Array(2,3,4,5,6)

// console.log(myArr[0])
// console.log(myHeros[1])
// console.log(myArray2[1])


//Array methods

// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

//slice , splice

console.log("A ", myArr)

const myn1 = myArr.slice(1 , 3)

console.log(myn1)

console.log("B " , myArr)

const myn2 = myArr.splice(1 , 3)

console.log("C " , myArr)
console.log(myn2)