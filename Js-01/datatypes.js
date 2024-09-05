//There are two data types : Primitive and Refrence(Non Primitive)
//In JavaScript, memory is primarily divided into two regions: stack and heap memory.

//Primitive : 7 types > String , Number , Boolean , undefined , bigint , symbol , null

//Stack memory is used for storing primitive data types.When you copy or assign a primitive value to another variable, the value itself is copied, and both variables hold independent values.
let a = 10;
let b = a;  // b is now also 10
a = 20;     // Changing 'a' does not affect 'b'

let valuenull = null
console.log(valuenull)       // null
console.log(typeof valuenull) // typeof null is object

let bignumber = 1255656565665655663n


//Every Symbol is guaranteed to be unique value, even if two symbols have the same description.
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false




// Refrence(Non Primitive) : Array , Object , Function
//Heap memory is used for storing reference data types. When you copy or assign a reference type, only the reference is copied, not the actual data. Both variables point to the same object, and changes to the object will affect both references.
let obj1 = { name: "Alice" };
let obj2 = obj1;  // obj2 points to the same object as obj1
obj1.name = "Bob"; // Changes affect both obj1 and obj2




let names = ["Khizar" , "Hijazi" , "Ali"]
console.log(typeof names) // function
let obj = {
    name : "Khizar",
    age : 23,
    phone : 12345678,
}
console.log(typeof obj) // Object

let myFunction = function(){
    console.log(typeof myFunction) // its data type is function butt its called function object i.e its also return object
}
myFunction()