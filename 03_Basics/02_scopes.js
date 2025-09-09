//Scopes

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30; // var does not effect scoping
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Omkar";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  //   two();
}

// one();
