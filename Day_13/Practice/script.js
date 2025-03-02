
// forEach

// arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// arr.forEach((el,index)=>{
//     console.log(`Element:${el},Index:${index}`);
// });

// arr=[1,2,3];
// arr.forEach(el=>console.log(el*2)); //Prints 2,4,6

// for(let i=0;i<arr.length;i++) {
//     console.log(arr[i], i);
// }

//MAP

// arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// let output=arr.map((el,index)=>{
//     return { element:el,index:index};
// });

// console.log(output);


// output = arr.map((el, index)=> {
//         return el **2 ;
// })

// console.log(output);

//filter
// output = arr.filter((el,index)=> {
//     return el>5;
// })
// console.log(output)



let arr=[1,2,4,67,6,5,6]
let a=arr.sort((a,b)=> {return a-b})
console.log(a)

array=[1,2,4,67,6,5,6]
let ans=array.sort((a,b)=>b-a)
console.log(ans)

a = "réservé"; // With accents, lowercase
b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b)); // Expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" })); // Expected output: 0
