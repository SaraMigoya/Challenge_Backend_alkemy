const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


function sendEmail(emailRegister, welcomeUser) {

    const msg = {
        to: emailRegister,
        from: "satumigoya@hotmail.com",
        subject: "Welcome to Challenge backend!",
        text: `Hello ${welcomeUser}! Welcome to Challenge backend Node js for Alkemy labs`
    }
  
}

module.exports = {sendEmail}