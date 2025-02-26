
console.log(this)

let obj={
    name:"suroj samanta",
    class:"B tech",
    myfunction:function(){
        console.log(this)
        console.log(this.name,this.class)
        console.log("I am suroj")

    },
    sub:["cn","dbms","eng"],
    newobj:{1:12,
        mynewfunction:function(){
            // console.log(this)
            return this[1]
        }
    }
}
console.log(obj)
console.log(obj.myfunction())
console.log(obj.newobj.mynewfunction())



// #######################################################################################################################################################################################

let obj1={
    name:"suroj samanta",
    class:"B tech",
    myFunction:() => {
        // console.log(this);
        // console.log(name,class);
        console.log("I am Suroj");
    },
    sub:["cn","dbms","eng"],
    newobj2:{1:12,
        mynewfunction:function(){
            // console.log(this)
            return this[1]
        }
    }
}



//condition

let num1=10, num2=20;
if(num1>num2){
    console.log(`${num1} is greater than ${num2}`)

}else if(num1<num2){
    console.log(`${num1} is less than ${num2}`)
}else if(num1=num2){
    console.log(`${num1} is equal to ${num2}`);

}else{
    console.log(("not"));
}



//let's suppose you have one num as input you have to check if num is multiple of 3 than print "Fizz",if num is multiple of 5 than print "Buzz", if num is multiple of both 3 and 5 than print "Fizz Buzz".
// let num = prompt("Enter a number");
var num=90;
if(num%3 ===0){
    console.log("Fizz");
}
else if(num %5===0){
    console.log("Buzz");
}
else if(num%5===0 && num%3===0) {
    console.log("Fizz Buzz");
}
else {
    console.log("no output");
}


// for loop

for (let i=0;i<10;i++){
    console.log(`${i}`);
}

var num=10;
for (let i=0;i<=num; i=i+1){
    console.log(i,num);
}


let arr = [1,2,3,4,5,5,6,7];

for(let j=0; j<arr.length;j++) {
    console.log(arr[j], j);
}

let str = "suroj samanta";
for(let i=0; i<str.length;i++) {
    console.log("s"+str[i]+"r");
}