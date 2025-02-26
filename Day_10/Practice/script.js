let str="svu university"
console.log(str.length)

console.log(str[0])
console.log(str[str.length-1])

str[0]="t"

let st2=str
console.log(st2)

let arr=[10,23.5,90,"suroj",true,undefined,null,"kunal"]
console.log(arr,typeof(arr),arr.length)

console.log(arr[3])

console.log(arr[-5])  //undefined

// console.log(arr[:-2])    // (:)is syntexerror:unexpected token
console.log(arr[arr.length-1])
console.log(arr[3]="skhasiful")

console.log(arr[arr.length-1]="sonu")
console.log(arr)

arr.push("madhu")
console.log(arr)

arr.pop()
console.log(arr)

const obj = {
    suroj: {
        name: "suroj samanta",
        age: 22,
        address: "ghatal",
        subs:["network", "math", "english"]
    },
    skhasiful: {
        name: "sonu",
        age: 25,
        address: "mayapur",
        subs:["network", "math", "english"]
    },
    1:"Hello"
}

console.log(obj.skhasiful.name);

console.log(obj["skhasiful"])

delete obj["skhasiful"];
console.log(obj)


let Name = "suroj";
let Class = "cse";
let subject = "network,math,datamining"

let newObj = {
    Name,
    Class,
    subject
}

console.log(newObj)


// slice
let fruits = ["apple","banana","orange","mango","grape"];
let citrus = fruits.slice(2,4);   //(start(0):end(1))       start:0,1,2    end:1,2,3

console.log(citrus); //Output: ["orange","mango"]
console.log(fruits); //Output: ["apple","banana",'orange',"mango",'grape']

// splice
let fruits2 = ["apple","banana","orange","mango","grape"];
let removedfru = fruits2.splice(2,2,'lemon','kiwi');

console.log(fruits2); //Output:["apple","banana","lemon",kiwi","grape"]
console.log(removedfru); //Output: ["orange","mango"]

