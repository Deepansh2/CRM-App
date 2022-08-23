/**
 * This file will contain the sample code for sending the email notification
 */

const nodeMailer = require("nodemailer");

module.exports = nodeMailer.createTransport({
  port: 465, // true for 465, false for other ports
//   host: "smtp.gmail.com",
  service : "gmail",
  auth: {
    user: "deepanshuthakur791@gmail.com",
    pass: "hlaqvssfwfyiedlc",
  },
  secure: true,
});
