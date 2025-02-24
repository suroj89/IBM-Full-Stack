// q1.
let X='5';
let y=5
console.log(X==y)      //true
console.log(X===y)      //false

//(==) is check only value,      (===) check value,and datatype



// q2
// reduce method
const words=["javscript","programming","function","Hosting"]
const longestword=words.reduce((longest,word)=> word.length>longest.length? word:longest,'')
console.log(longestword)

// for loop
const wordarr=["javscript","programming","function","Hosting","surojsamanta"]
let longest="";
for (const word of wordarr){
    if(word.length> longest.length){
        longest=word;
    }
}
console.log(longest)




//q3

function testScope(){
    if(true){
        var a=10;
        let b=20;
        const c=30;

    }
    console.log(a)         //10
    // console.log(b)     //reference error: b is not defined
    // console.log(c)      //reference error: c is not defined
}
testScope();

// q4

var name1 = "John";
function greet() {
    if (true) {
        var message1= "Hello " + name1;
    }
    console.log(message1);
}
greet();      //hello john


//using const
const name = "John";
function greeet() {
    if (true) {
        var message = "Hello "+name;
        // const message = "Hello " + name;  // not run
    }
    console.log(message);
}
greeet();



// q5
// traditional function
function multiply(a,b) {
    return a * b;
}
let c=multiply(5,8)
console.log(c)


// arrow function
const mul=(a,b)=>a*b;
console.log(mul(5,6))

// q6

let n="suroj"
const obj = {
    name: "Alice",
    sayHello: function() {
        setTimeout(() => {
            console.log("Hello",n);
            console.log("Hello,"+this.name);  //'this' is keyword,name property belong to obj ,"this" still refers to the "obj" object
            console.log("hello "+obj.name)  //this.name correctly refer to obj.name
        },3000);
    }
};
obj.sayHello();

// q7

// console.log(a);      //undefined        :js know about the variable but has not assigned it a value yet.     var is global scope
// var a=10;
// console.log(b);    //reference error     :js doesnot allow access to  b before it is declared.               let is block-scoped
// let b=20;



// q8
console.log(square(5));
function square(n) {
 return n * n;
}
// console.log(double(4));
// var double = function(n) {
//  return n * 2;
// }                  //referce error: double not a function



// q9
console.log(5 + "5");
console.log(5 - +"3");
console.log(5 * "2");
console.log("10" / 2);
console.log(10 % "3");

console.log("5"*7)
console.log("6"/"3")
console.log("55"+"22")

// q10
let x = 10;
x+=5               // x = x + 5;
console.log(x)
x*=2                // x = x * 2;
console.log(x)
x-=3                // x = x - 3;
console.log(x)
x/=2                // x = x / 2;
console.log(x)


// q 11

console.log(5 > 3 && 10 < 20);       //AND
console.log(5 > 3|| 10 > 20);        //OR
console.log(!(5 > 3));                //NOT


// q12
function sum(a, b, c=5) {
    return a + b + c;
}
console.log(sum(2,6));
console.log(sum(2, 3, 10));

// q14
function outer() {
    let count = 0;
    return function inner() {
    count++;
    console.log(count);
    };
}
const counter1️ = outer();
counter1️();
counter1️();
counter1️();
const counter2️ = outer();
counter2️();
counter2️();
counter2️();
counter2️();




