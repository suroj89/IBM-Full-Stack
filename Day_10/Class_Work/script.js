// let str = "SVU University";
// console.log(str.length);

// console.log(str[0])
// console.log(str[str.length-1])

// str[0] = 's';

// let str2;
// str2 = str;

// let arr = [10, 13.2,20, 'a', "abc", undefined, null, true];
// console.log(arr);

// console.log(arr[3]="SUROJ");
// console.log(arr[arr.length-1])
// arr.push("samanta");
// console.log(arr);
// arr.pop();
// console.log(arr);

//splice,slice


//##########################################################################3




//object

// 3 ways to write object
// object literal
// new keyword
// constructor

const obj = {
    suroj: {
        name: "suroj samanta",
        age: 22,
        address: "ghatal",
        subs:["network", "math", "english"]
    },
    skhasiful: {
        name: "sk hasiful",
        age: 25,
        address: "bakura",
        subs:["network", "dbms", "math"]
    },
    1:"Hello"
}

// console.log(obj.skhasiful.name);

// console.log(obj["skhasiful"])

// delete obj["skhasiful"];
// console.log(obj)

obj.Virat = {
    name: "Virat Kohli",
    age: 32,
    address: "Mumbai",
    subs:["network", "dbms", "math"]
}
obj.Virat = {
    name: "Virat Kohli",
    age: 32,
    address: "Delhi",
    subs:["network", "dbms", "math"]
}

console.log(obj)

let Name = "Rohit";
let Class = "bbci";
let subject = "Fs"

let newObj = {
    Name,
    Class,
    subject
}


console.log(newObj)