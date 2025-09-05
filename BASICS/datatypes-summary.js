// # Primitive Datatypes

//  7 Types
// string, number , boolean , null , undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // not same rather the values in the strings are same

//const bigNumber = 45632563256325634521n; //BigInt

// reference type(Non primitive)

// arrays , objects , functions

const heroes = ["shaktiman", "naagraj", "doga"];
//objects
let myObj = {
  name: "omkar",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof myFunction);
