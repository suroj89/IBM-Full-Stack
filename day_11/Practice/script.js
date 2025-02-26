
console.log(this)

let obj={
    name:"surojsamanta",
    class:"B tech cse ",
    myfunction:function(){
        console.log(this)
        console.log(this.name,this.class)
        console.log("I am suroj")

    },
    sub:["cn","dbms","eng"],
    newobj:{7:34,
        mynewfunction:function(){
            // console.log(this)
            return this[7]
        }
    }
}
console.log(obj.myfunction())
console.log(obj.newobj.mynewfunction())
console.log(obj)


// num1=prompt("Enter anumber")
// num2=prompt("Enter a number")
// if(num1>num2){
//     console.log(`${num1} is greater than ${num2}`)

// }else if(num1<num2){
//     console.log(`${num1} is less than ${num2}`)
// }else if(num1=num2){
//     console.log(`${num1} is equal to ${num2}`);

// }else{
//     console.log(("not"));
// }

let arr = [1,2,3,4,5,6,7];

for(let j=0; j<arr.length;j++) {
    // console.log(j);
    console.log(arr[j], j);
}

let str = "suroj samanta";
for(let i=0; i<str.length;i++) {
    // console.log(str[i]);
    console.log("s"+str[i]+"r");
}
// console.log(str[i]);    //not found error

