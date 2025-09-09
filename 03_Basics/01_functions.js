function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName(); //function execution

// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
//   //   return number1 + number2;
// }

// const result = addTwoNumbers(1, 3);
// console.log("Result: ", result);

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// loginUserMessage("Omkar");
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  //... => is a rest operator
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "Omkar",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handerObject(user);

handleObject({
  username: "XXX",
  price: 399,
});

myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
