const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , curr){
//     console.log(`acc: ${acc} and curr: ${curr}`);
    
//     return acc + curr
// }, 0)


const myTotal = myNums.reduce( (acc , curr) => acc + curr ,0)

console.log(myTotal);

