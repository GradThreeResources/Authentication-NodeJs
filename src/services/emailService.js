// Import required modules
const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter object using the SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // SMTP outlook server
  port: 587, // SMTP port (e.g., 587 for TLS or 465 for SSL)
  secure: false, // True for 465, false for STARTTLS
  auth: {
    user: process.env.EMAIL, // Email address or username
    pass: process.env.EMAIL_PASSWORD, // Your email account password or app-specific password
  },
});

// Function to send an email
// Returns a promise
const sendMail = (to, subject, text, html) => {
  // Email message options
  const mailOptions = {
    from: process.env.EMAIL, // Sender address
    to: to, // List of recipients
    subject: subject, // Subject line
    text: text || "", // Plain text body
    html: html || "", // HTML body
  };
  // Send the email using the transporter and return the result
  return transporter.sendMail(mailOptions);
};

// Function to send OTP email
// Returns a promise
const sendOTPMail = async (to, otp) => {
  await sendMail(
    to,
    `Your One-Time Password (OTP) for Account Verification`,
    ``,
    `<p>Hello,<br>Your OTP for verification is: <strong>${otp}</strong>.</p>`
  );
};


// Export the function to be used in other modules
module.exports = {
  sendOTPMail,
};
