const user = {
  username: "Omkar",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
  // this keyword refers to current context
};

// user.welcomeMessage();
// user.username = "SAM";
// user.welcomeMessage();

// function chai() {
//   let username = "Omkar";
//   console.log(this.username);
//   //   console.log(this);
// }

// chai();

// const chai  = function () {

// }

const chai = () => {
  let username = "Omkar";
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(3, 4));

// implicit return
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach(() => {});
