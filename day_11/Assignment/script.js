// const student={
//     name:"Suroj Samanta",
//     rollNumber:29,
//     marks:{
//         Math:84,
//         Science:45,
//         English:70,
//         History:68
//     },
//     getAverageMarks:function(){
//         // Calculate and return average marks
//         let totalMarks=0;
//         let subjectCount=0;
//         for (let subject in this.marks){
//             totalMarks+=this.marks[subject];
//             subjectCount++;
//         }
//         return totalMarks/subjectCount;
//     },
//     checkPassOrFail:function(){
//         // Check if passed or failed
//         return this.getAverageMarks()>40?"Passed":"Failed";
//     }
// };

// console.log(student.getAverageMarks()); //Output:66.75
// console.log(student.checkPassOrFail()); //Output:"Passed"
//############################################################################################

//Q2

const library = {
    books: {
        "Atomic Habits": { author: "James Clear", availableCopies: 3 },
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
    },
    borrowBook: function(bookName) {
        if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
            this.books[bookName].availableCopies--;
            console.log(`You have borrowed "${bookName}".`);
        } else {
            console.log(`Sorry, "${bookName}" is not available or out of stock.`);
        }
    },
    returnBook: function(bookName) {
        if (this.books[bookName]) {
            this.books[bookName].availableCopies++;
            console.log(`You have returned "${bookName}".`);
        } else {
            console.log(`"${bookName}" is not a part of this library.`);
        }
    }
};

library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies); // Output:2

library.returnBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies); // Output:3