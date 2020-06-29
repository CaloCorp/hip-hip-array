/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0
//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.

const challenge = function(num){

  console.log('##### ' + num + ' #####')
}
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];

const printRoster= function (array){

  for(let i=0; i < array.length;i++)

  console.log(array[i])

}
challenge(1)
printRoster(students)
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
const printGradesBackwards = function(array){

  for(let i =array.length-1 ;i >0;i--)

  console.log(array[i])
}
challenge(2)
printGradesBackwards(grades)
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
const printPositiveEvenNumbers=function(array){

  for(let i=0;i< array.length;i++){

    if(array[i] % 2 === 0){
      console.log(array[i])
    }
  }
}
challenge(3)
printPositiveEvenNumbers(positiveNumbers)
// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
const printPositiveEvenMixedNumbers= function(array){
for(let i=0;i< array.length;i++){

  if(array[i] % 2 === 0){
    console.log(array[i])
  }
}
}
challenge(4)
printPositiveEvenMixedNumbers(mixedSignNumbers) 
// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
const removeFirst2AndLastOne=function(array){
let newArray=[]
newArray=  array.splice(2,array.length-3)
for(let i=0; i < newArray.length;i++)

  console.log(newArray[i])

}
challenge(5)
removeFirst2AndLastOne(symmetricalCapitals)

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
const printNumbers= function(array){

  array.unshift(0,1)
  array.push(5,7)
for(let i=0; i < array.length;i++)

  console.log(array[i])
}
challenge(6)
printNumbers(fibonacciNumbers)
// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.

const MarcsArray=[3,8,24,48,72]
const printMyArray = function(array){
for(let i=0; i < array.length;i++)

  console.log(array[i])
}
challenge(7)
printMyArray(MarcsArray)
// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.

const emptyArray =[]

fillArrayWithNumbers= function(array){

  array.unshift(0,1,2)
  array.push(3,4)

  for(let i=0; i < array.length;i++)

  console.log(array[i])
}
challenge(8)
fillArrayWithNumbers(emptyArray)
// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
const studentsAtIndex3AndOn= function(array){

  for(let i=2; i < array.length;i++)

  console.log(array[i])
}
challenge(9)
studentsAtIndex3AndOn(students)

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.

const studentsAt3AndOn=function(array){

  let newArray=[]

  for(let i=0;i<array.length;i++){
    if(i< array.length){
    newArray.push(array[i])
  }
  }
  for(let i=0; i < newArray.length;i++){
    console.log(newArray[i])
  
}
  }
challenge(10)
studentsAt3AndOn(students)
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.
const studentsAgain=function(array){

  let newArray=[]
  newArray= array.slice(3,10)
  console.log(newArray)

  for(let i=0;i < array.length;i++)
  console.log(array[i])
}

challenge(11)
studentsAgain(students)
// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

const moddedDinos=function(array){

  array.splice()
}

challenge(12)
// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.

const starDinos= function(array){
let newArray=[]
 newArray= array.join('*')
  
 console.log(newArray)
}


challenge(13)
starDinos(dinosaurs)
// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

const reverseDinos = function(array){
  array.reverse()
  console.log(array)
}


challenge(14)
reverseDinos(dinosaurs)
// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const concatArray= function(array1,array2){

  let newArray=[]

  newArray= array1.concat(array2)

  for(let i=0;i <newArray.length;i++)
  console.log(newArray[i])
  console.log(array1)
  console.log(array2)
}

challenge(15)
concatArray(primaries,secondaries)