// Immediately Invoked Function Expression (IIFE)

(function chai() {
  //named IIFE
  console.log(`DB connected`);
})(); //always close the IIFE with semicolon to invoke it

((name) => {
  //unnamed IIFE
  console.log(`DB connected two ${name}`);
})("Omkar");
