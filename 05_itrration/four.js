const myObject = {
    js : 'Javascript',
    cpp : 'c++',
    rb : 'ruby'
}

for (const key in myObject) {
//    console.log(key)
console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programming = ["js","rb","py","java"]

for (const key in programming) {
    console.log(programming[key])
}

const map = new Map()

map.set('IN' , "India")
map.set('USA' , "United state of America")

console.log(map)

for (const key in map) {
    console.log(key)
}