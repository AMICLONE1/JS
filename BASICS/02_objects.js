// const tinderUser = newObject()

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "omkar@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Omkar",
      lastname: "Kolhe",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { ...obj1, ...obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "o@gmail.com",
  },
  {
    id: 1,
    email: "m@gmail.com",
  },
  {
    id: 1,
    email: "K@gmail.com",
  },
  {
    id: 1,
    email: "a@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //convert top arrays
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //to check the property in the object
