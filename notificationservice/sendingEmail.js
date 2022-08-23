/**
 * This file will contain the sample code for sending the email notification
 */

const nodeMailer = require("nodemailer")

const transporter = module.exports = nodeMailer.createTransport({
    port : 465,      // true for 465, false for other ports
    host : "smtp.gmail.com",
    auth : {
        user : "deepanshuthakur791@gmail.com",
        pass : "hlaqvssfwfyiedlc"
    },
    secure : true
})

// console.log(transporter)
/**
 * Sending the email
 */
const mailDataObj = {
    from : 'crm-no-reply@gmail.com',
    to : ['deepanshusing54@gmail.com','sumitkashyap21082001@gmail.com',"ritusingh48343@gmail.com"],
    subject : "Testing the notification service to send email ",
    text : "Sample text content",
    html :"<b> Heyy You ! on your left u silly!  is this working bab</b>"
}

transporter.sendMail(mailDataObj,(err,data) =>{
    if(err){
        console.log(err.message);
    }else{
        console.log("email sent successfully")
    }
})