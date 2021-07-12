// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// const boilingPoint = (temp) => {
//     if (temp < 212){
//         return `${temp} is below boiling point`
//     } else if (temp > 212){
//         return `${temp} is above boiling point`
//     } else if (temp === 212){
//         return `${temp} is at boiling point`
//     } else {
//         return "ERROR"
//     }
// }

// console.log(boilingPoint(212))
//
/////////////////////////////////////////////////////////////////////// Todd's Pseudocode //////////////////////////////////////////////////////////////
// When it came to coding the problem above I knew that I needed to create an if statement and at least two other else if statements.
// Once I checked to see if the first if statement worked which it did.
// I then just repeated the same steps for my else if statements.
// Then last and not least I put the old statement of returning the error just in case the user did not put in a number.
// I know it probably took me a little longer than most people because I would write a little bit of code and test it out.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 22, 9, 13]
// var myNewNumber1 = myNumbers1.slice(4)
// var myNewNumber2 = myNumbers1.slice(3,4)
// var myNewNumber3 = myNumbers1.slice(2,3)
// var myNewNumber4 = myNumbers1.slice(1,2)
// var myNewNumber5 = myNumbers1.slice(0,1)
// var myNewNumber6 = myNumbers2.slice(4)
// var myNewNumber7 = myNumbers2.slice(3,4)
// var myNewNumber8 = myNumbers2.slice(2,3)
// var myNewNumber9 = myNumbers2.slice(1,2)
// var myNewNumber10 = myNumbers2.slice(0,1)
// var myArray = myNewNumber1.concat(myNewNumber9).concat(myNewNumber3).concat(myNewNumber5).concat(myNewNumber4).concat(myNewNumber10).concat(myNewNumber7).concat(myNewNumber6).concat(myNewNumber8).concat(myNewNumber2)
// console.log(myArray)
/////////////////////////////////////////////////////////////////////// Todd's Pseudocode //////////////////////////////////////////////////////////////
// All I have to say is you do the best You can do with what you have.
//I took what I had learned during the week and stuck with what I know I understand that it's probably a long drawn out process but I got the job done.
//I knew that by using the slice method I would be able to chop a single number out of an array so that's what I did I chopped it 10 times for 10 numbers.
//Then I figured out which number went where and used the concat method ten times to make a new variable called myArray.
// After I had done all of this I wanted to know if there was a simpler way so I got online and talked to a couple of other coders that I know and this was the solution they gave me.
// 
// var myNewNumber = myNumbers1.concat(myNumbers2)
// // console.log(myNewNumber)

// var myNewArray = myNewNumber.sort(function(a,b){ return a - b});
// console.log(myNewArray)
//This is a function that allows you to take an array break it down by numbers. 
// sort that array then return the assorted numbers.
//Reading the syllabus we should be learning about these types of functions next week
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

// var myString1 = "bravo"
// var myString2 = "charlie"

// var newString3 = myString1.split("")
// var newString4 = newString3.reverse()
// var newString5 = myString2.split("")
// var newString6 = newString5.reverse()
// var newString7 = newString4.join("")
// var newString8 = newString6.join("")
// console.log(newString7, newString8)
/////////////////////////////////////////////////////////////////////// Todd's Pseudocode //////////////////////////////////////////////////////////////
// First thing I had to do was convert the strings into an array because the .reverse is an a ray method.
// As you can see I worked with one and then the other just to make things simple for me.
// Once I got them into a race I then reversed them and then using the .join Method I was then able to convert them back into a string.
// Then I worked on the second bit of code for Charlie once I knew that I had bravo correct.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

// var numberExample1 = 42
// var numberExample2 = 27

// var numberExample3 = 19
// var numberExample4 = 17

// const equation1 = (answer) => {
//     if(numberExample1 > numberExample2) {
//         return numberExample1 - numberExample2
//     } else if (numberExample1 < numberExample2) {
//         return `${numberExample1} is smaller then ${numberExample2} so therefore I cannot compute`
//     }
// }
// console.log(equation1())

// const equation2 = (answer) => {
//     if(numberExample3 > numberExample4) {
//         return numberExample3 - numberExample4
//     } else if (numberExample3 < numberExample4) {
//         return `${numberExample3} is smaller then ${numberExample4} so therefore I cannot compute`
//     }
// }
// console.log(equation2())
/////////////////////////////////////////////////////////////////////// Todd's Pseudocode //////////////////////////////////////////////////////////////////
// This is another question where I knew the answer and then I started typing and getting ahead of myself and not really visualizing how the code was going to look and in what order.
// So they were a few stumbling blocks that I had to slow down and really think through it.
// Then I saw that Sara One of the instructors were on and asked for help.
// The only hint she gave me was to check my parentheses.
// As I said before I was just in too big of a hurry and totally missed a set of parentheses in my consul log. 
// Once I had fix that problem the code ran perfectly. 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

// var numberExampleRefactor1 = 42
// var numberExampleRefactor2 = "hello"

// var numberExampleRefactor3 = 27
// var numberExampleRefactor4 = 24

// const equation1 = (answer) => {
//     if(numberExampleRefactor1 > numberExampleRefactor2) {
//         return numberExampleRefactor1 - numberExampleRefactor2
//     } else if (numberExampleRefactor1 < numberExampleRefactor2) {
//         return `${numberExampleRefactor1} is smaller then ${numberExampleRefactor2} so therefore I cannot compute`
//     } else {
//         return `Your input is not a ${typeof numberExampleRefactor1}`
//     }
// }
// console.log(equation1())

// const equation2 = (answer) => {
//     if(numberExampleRefactor3 > numberExampleRefactor4) {
//         return numberExampleRefactor3 - numberExampleRefactor4
//     } else if (numberExampleRefactor3 < numberExampleRefactor4) {
//         return `${numberExampleRefactor3} is smaller then ${numberExampleRefactor4} so therefore I cannot compute`
//     }
// }
// console.log(equation2())
/////////////////////////////////////////////////////////////////////// Todd's Pseudocode //////////////////////////////////////////////////////////////////
// When I read through this the first time I was lost for about 20 minutes until I read up on typeof.
// And because it took me that time I was able to slow down visualize how the code was going to look and what areas I needed to fix in order for it to display the right output.
// Finding out that the command typeof basically gives you the data type of the input that you have put in.
// If you put in a string, boolean, object or even a funcation it will show you.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
