// TASK 4

const generatePassword = require("generate-password");

const password = generatePassword.generate({
  length: 10,
  number: true,
});

console.log(password);
