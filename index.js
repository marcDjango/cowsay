const user= require('./information');
const cowsay = require("cowsay");

// console.log(`Hello ${userInfo.student.}`);
// console.log(user.name);
console.log(cowsay.say({ text: `Hello ${user.name} bienvenue au campus de ${user.campus}` }));