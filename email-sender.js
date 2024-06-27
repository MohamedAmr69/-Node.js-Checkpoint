// TASK 5

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

let mailOptions = {
  from: "your-email@gmail.com",
  to: "your-email@gmail.com",
  subject: "Test Email",
  text: "Hello from Node.js",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Email sent: ${info.response}`);
});
