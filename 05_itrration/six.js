// const coding = ["js","ruby",
//     "java","python"
// ]

// const values = coding.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(values)


const  myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)

const newNums = myNums.filter((num) =>{
    return num > 4
})

//const userBooks = books.filtter((bk)=> bk === 'history')

console.log(newNums);


student_list1 = ['tim', 'drake', 'ashish', 'shubham']

student_list2 = ['andrew', 'harshit', 'lary', 'shubham', 'chris']



const checkStudent = student_list1.filter((student) => {
    return student == 'ashish'
    
})

console.log(checkStudent)

if(checkStudent.length > 0){
    console.log('Available')
}else{
    console.log('not Available')
}

// O(n)

