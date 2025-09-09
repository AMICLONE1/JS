//singleton

//object literals

const mySum = Symbol("key1");

const JsUser = {
  name: "Omkar",
  "full name": "Omkar Kolhe",
  age: 18,
  mySum: "mykey1", //string
  [mySum]: "mykey1", //symbol syntax to use literal symbol
  location: "Pune",
  email: "omkar@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySum]);

JsUser.email = "omkarkolhe@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "XXXXXXXXXXXXXXX";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
