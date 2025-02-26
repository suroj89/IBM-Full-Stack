// Q1

const student={
    name:"suroj samanta",
    rollNumber:29,
    marks: {
        Math:60,
        Science:79,
        English:76,
        History:68
    },
    getaveragemarks:function() {
        const marks=Object.values(this.marks);
        const total=marks.reduce((sum,mark)=>sum+mark,0);
        return total/marks.length;
    },
    CheckpassOrfail:function() {
        return this.getaveragemarks()>40?"Pass":"Fail";
    }
};

console.log(student. getaveragemarks());
console.log(student.CheckpassOrfail());




// q2

const library={
    books:{
        "pather panchali":{ author: "Bibhutibhushan Bandhopadhyay" ,available:3},
        "Gitanjali":{author:"Rabindranath Tagore",available:5}
    },
    BorrowBook:function(bookname){
        if(this.books[bookname] && this.books[bookname].available>0){
            this.books[bookname].available--;
            console.log(`you borrowed ${bookname}`);
        }else{
            console.log("Sorry this book is not available")
        }
    },
    ReturnBook:function(bookname){
        if(this.books[bookname]){
            this.books[bookname].available++;
            console.log(`you returened ${bookname}`)
        }else{
            console.log("Invalid book");
        }
    }
};
library.BorrowBook("pather panchali")
console.log((library.books["Gitanjali"].available));


// Q3
function generatetable(num,num2) {
    for (let i=1;i<=num2;i++) {
        console.log(`${num}x${i}=${num*i}`);
    }
}
generatetable(10,10);

// Q4

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

