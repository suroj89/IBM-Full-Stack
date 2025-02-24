// check var ,let ,const 

var  n=89;
console.log(n)
let  m=90;
console.log(m)
const p=78;
console.log(p)

n="suroj"
console.log(n)
m="svu"
console.log(m)

// p="CSE"
// console.log(p)  //type error : this is const var

// scope var,let and const

var a="suroj"
console.log(a)
{
    var a="svu"
    console.log(a)
}
console.log(a)

let b="suroj"
console.log(b)
{
    let b="CSE"
    console.log(b)
}
console.log(b)

// const p="suroj"
// {
//     p="IBM"
//     console.log(p)       //syntax error :identifier  p has already declared
// }
// console.log(p)

var c="suroj"
console.log(c)
{
    let c="IBM"
    console.log(c)
}
console.log(c)


let d="suroj"
console.log(d)
{
    d=90
    console.log(d)
}
console.log(d)



// datatypes

let num=90
let str="suroj"
let nl=null
let B=BigInt("89")+BigInt("55")
let t=true
let sym=Symbol("I am symboll")
let u=undefined

console.log(nl,B,sym,u)

console.log(typeof(nl))
console.log(typeof(B))
console.log(typeof(sym))
console.log(typeof(u))

function myfunc(){
    let a=90;
    let b=a+=a
    console.log(b)
}
myfunc()


// space length
let sp="       "
console.log(sp.length)

let f=10,e="10"
let ac=+e+f
console.log(ac)
console.log(typeof(ac))


//this is not run in vs code
// (()=>{
//     console.log("IIFE")    //Immediately Invoked Function Expression (IIFE)
// })();