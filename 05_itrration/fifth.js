const coding = ['js','ruby','java','python']

// coding.forEach(
//     function (val) {
//         console.log(val)
//     }
// )


// coding.forEach(element => {
//     console.log(element)
// });


// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)


// coding.forEach((element , index , arr)=> {
//     console.log(element , index , arr);
    
// });




const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName)
});