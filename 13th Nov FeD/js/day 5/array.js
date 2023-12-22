// store values in array 

// const sanwcih = ["peanut buttur", "jelly", "bread"]

// console.log(sanwcih)


// myArray should be an array.
// The first item in myArray should be a string.
// The second item in myArray should be a number.


// let myArray = ["hello im good", 5]


// Nest one Array within Another Array

// const teams = [["csk", 14, ["dhoni", "thala"]], "rcb",]
 

// Create a variable called myData and set it to equal the first value of myArray using bracket notation.
// The variable myData should equal the first value of myArray.
// The data in variable myArray should be accessed using bracket notation.



// var myArray = [500, 600, 700];

// var myData = myArray[2];

// console.log(myData);




// Modify the data stored at index 4 of myArray to a value of 100.
// myArray should now be [45, 64, 99].
// You should be using correct index to modify the value in myArray.



// var myArray = [45, 64, 99];
// console.log(myArray);

// myArray[4] = 100;


// console.log(myArray);





// One way to think of a multi - dimensional array, is as an array of arrays.
// When you use brackets to access your array, the first set of brackets refers
// to the entries in the outermost(the first level) array,
// and each additional pair of brackets refers to the next level of entries inside.


// const arr = [
//   [1, 2, 3],//0
//   [4, 5, 6],//1
//     [7, 8, 9],//2
//     [[10, 11, 12], 13, 14],//3  
// ];



// excercise 
// Using bracket notation select an element from myArray such that myData is equal to 8.

// myData should be equal to 8.
// You should be using bracket notation to read the correct value from myArray.

// Setup

const arr = [
  [1, 2, 3], //0
  [4, 5, 6], //1
  [7, 8, 9], //2
    [[10, 11, 12], 13, 14], //3
];
const cars = ["raj", "gee", "ree", "pree", ["raaaa", ["jash"]]];
const bikes = ["raj", "gee", "ree", "pree", ["raaaa", ["jash"]]];

let myData = arr.concat(cars + bikes).toString().toUpperCase();


console.log(myData);














