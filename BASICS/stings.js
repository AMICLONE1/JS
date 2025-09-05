//strings
const name = "omkar";
const repoCount = 50;

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("omkar-omkar");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   omkar   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://omkar%20.com";

console.log(url.replace("%20", "-"));
