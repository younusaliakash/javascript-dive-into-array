//Array traverse

const arr = [1, 2, 3, 4, 5]

//Simple traverse
// for (let i = 0; i < arr.length ; i++){
//     console.log(arr[i])
// } 

let sum = 0;

for (let i = 0; i < arr.length ; i++){
    sum += arr[i]  //sum = sum + arr[i]
} 

// console.log(sum)

const arr1 = [25,56,78,95,69,75,43,94]
let arr2 = []

let largestNumber = arr1[0];

for (let i = 1; i < arr1.length ; i++){
    if(arr1[i] > largestNumber){
        largestNumber = arr1[i]
    }
} 

console.log(largestNumber)

let smallestNumber = arr1[0];

for (let i = 1; i < arr1.length ; i++){
    if(arr1[i] < smallestNumber){
        smallestNumber = arr1[i]
    }
}

console.log(`smallest Number ${smallestNumber}`)
// console.log(`new array ${arr1}`)