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
console.log(loginUserMessage());
