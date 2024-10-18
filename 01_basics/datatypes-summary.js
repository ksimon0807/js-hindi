// console.log("bitch ass" + 2+2);

// Primitive --> call by value
// 7 types : 
// String, Number, boolean, null, undefined, symbol, BigInt

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.You can assign different types of values to a variable during its lifetime.

const score = 100
const scoreValue = 100.3025
const isLoggedIN = true
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // not same

const bigNumber = 4513222464896465n



// Reference (Non Primitive)


// Arrays, Objects, Functions

const heroes = ["shaktiman","naagraj","doga"]

let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunct = function(){
    console.log("Hello World");   
}

console.log(typeof heroes);

/* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object) */

