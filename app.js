let stm1 = +prompt('Marks Total in Maths')
let sub1 = +prompt('Marks Obtained in Maths: ')

let stm2 = +prompt('Marks Total in Computer')
let sub2 = +prompt('Marks Obtained in Computer: ')

let stm3 = +prompt('Marks Total in Urdu')
let sub3 = +prompt('Marks Obtained in Urdu: ')

let stm4 = +prompt('Marks Total in English')
let sub4 = +prompt('Marks Obtained in English: ')

let stm5 = +prompt('Marks Total in Pak-Studies')
let sub5 = +prompt('Marks Obtained in Pak-Studies: ')

let percentage = (sub1 + sub2 + sub3 + sub4 + sub5) / (stm1 + stm2 + stm3 + stm4 + stm5) * 100
console.log('Marks Sheet');

console.log('Maths : ' + sub1 +'/' + stm1 );
console.log('Computer : ' + sub2 +'/' + stm2 );
console.log('Urdu : ' + sub3 +'/' + stm3 );
console.log('English : ' + sub4 +'/' + stm4 );
console.log('Pak-Studies : ' + sub5 +'/' + stm5 );

console.log('Total Marks : ' + (stm1 + stm2 + stm3 + stm4 +stm5));
console.log('Obtained Marks : ' +(sub1 + sub2 + sub3 + sub4 + sub5));
console.log('Percentage : ' + percentage + '%');

if (percentage >= 80) {
    console.log("Grade : A-one")
    console.log("Remarks : Excellent")
    }
    else if (percentage >= 70) {
    console.log("Grade : A")
    console.log("Remarks : Good")
    }
    else if (percentage >= 60) {
    console.log("Grade : B")
    console.log("Remarks : You need to improve")
    }
    else if (percentage >= 50) {
    console.log("Grade : C")
    console.log("Remarks : You need to do work hard")
    }
else {
     (percentage >=40)
    console.log("Grade : Fail")
    console.log("Remarks : Sorry ")
}



// var som1 = +prompt("Marks obtained in Subject 1: ")
// var stm1 = +prompt("Total marks in Subject 1: ")
// var som2 = +prompt("Marks obtained in Subject 2: ")
// var stm2 = +prompt("Total marks in Subject 2: ")
// var som3 = +prompt("Marks obtained in Subject 3: ")
// var stm3 = +prompt("Total marks in Subject 3: ")
// var percentage1 = (som1 + som2 + som3) / (stm1 + stm2 + stm3) * 100
// console.log("Marks Sheet" + "<br><br>")
// console.log("Total marks : " + (stm1 + stm2 + stm3))
// console.log("Marks obtained : " + (som1 + som2 + som3))
// console.log("Percentage : " + percentage1 + "%")
// if (percentage1 < '100' && percentage1 >= '80') {
//     console.log("Grade : A-one")
//     console.log("Remarks : Excellent")
// }
// else if (percentage1 < '80' && percentage1 >= '70') {
//     console.log("Grade : A")
//     console.log("Remarks : Good")
// }
// else if (percentage1 < '70' && percentage1 >= '60') {
//     console.log("Grade : B")
//     console.log("Remarks : You need to improve")
// }
// else if (percentage1 < '60' && percentage1 >= '0') {
//     console.log("Grade : Fail")
//     console.log("Remarks : Sorry")
// }

// // Get marks for each subject from the user
// let urdu = parseInt(prompt("Enter marks obtained in Urdu:"));
// let maths = parseInt(prompt("Enter marks obtained in Maths:"));
// let english = parseInt(prompt("Enter marks obtained in English:"));
// let computer = parseInt(prompt("Enter marks obtained in Computer:"));
// let pakStudies = parseInt(prompt("Enter marks obtained in Pak Studies:"));

// // Define the total marks for each subject
// const totalMarksPerSubject = 100;
// const totalSubjects = 5;
// const totalMarks = totalMarksPerSubject * totalSubjects;

// // Calculate obtained marks
// let obtainedMarks = urdu + maths + english + computer + pakStudies;

// // Calculate percentage
// let percentage = (obtainedMarks / totalMarks) * 100;

// // Determine grade using if-else statements
// let grade = "";
 
// if (percentage >= 90) {
//     grade = "A+";
// } else if (percentage >= 80) {
//     grade = "A";
// } else if (percentage >= 70) {
//     grade = "B";
// } else if (percentage >= 60) {
//     grade = "C";
// } else if (percentage >= 50) {
//     grade = "D";
// } else {
//     grade = "F";
// }

// // Output the result in the console
// console.log("Marks Sheet");
// console.log("Urdu: " + urdu + "/" + totalMarksPerSubject);
// console.log("Maths: " + maths + "/" + totalMarksPerSubject);
// console.log("English: " + english + "/" + totalMarksPerSubject);
// console.log("Computer: " + computer + "/" + totalMarksPerSubject);
// console.log("Pak Studies: " + pakStudies + "/" + totalMarksPerSubject);
// console.log("Total Marks: " + obtainedMarks + "/" + totalMarks);
// console.log("Percentage: " + percentage + "%");
// console.log("Grade: " + grade);
