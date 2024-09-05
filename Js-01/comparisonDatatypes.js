// using comparison opreators comparison is always between same data types. What happens when there data types are not same .lets breake down with some examples.

// console.log('2' > 2) 
// expected result is Nan , but false ,  bcz js auto conveted the string number to number data type

console.log(null  > 0) // false
console.log(null  == 0)// false
console.log(null  < 0)// false
console.log(null  <= 0)// true

// // comparion operate like < & > and equality operators = are different little bit
// Here's in the comparison operators javascript changes the null to 0 , not in equality operator = .

console.log("1" == 1) // true
console.log("1" === 1) // false

// == operator just check the value while === operator check the value and datatype both.


console.log(undefined  > 0) // false
console.log(undefined  == 0)// false
console.log(undefined  < 0)// false
console.log(undefined  <= 0)// false

// undefined is always undefined.Therefore, their result will be false

// node comparisonDatatypes.js