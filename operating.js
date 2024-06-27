// TASK 3

const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File created and data written");
});

fs.readFile("welcome.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
