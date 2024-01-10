# File: `emailService.js`

## Purpose
This file contains functions related to sending emails using Node.js and Nodemailer.

## Dependencies
- **Nodemailer**: Module for sending emails.
- **dotenv**: Module for loading environment variables.

## Functions

### `sendMail(to, subject, text, html)`
- **Purpose**: Sends an email using the configured transporter.
- **Parameters**:
  - `to`: Email address of the recipient.
  - `subject`: Subject line of the email.
  - `text`: Plain text body of the email (optional).
  - `html`: HTML body of the email (optional).
- **Steps**:
  - Creates mail options with sender, recipient, subject, and body.
  - Uses the transporter to send the email.
- **Returns**: A promise representing the result of sending the email.

### `sendOTPMail(to, otp)`
- **Purpose**: Sends an OTP (One-Time Password) email for account verification.
- **Parameters**:
  - `to`: Email address of the recipient.
  - `otp`: OTP value to be sent in the email.
- **Steps**:
  - Calls `sendMail` function with specific OTP email content.
- **Returns**: A promise representing the result of sending the OTP email.

## Usage
The `sendOTPMail` function is exported for use in other modules to send OTP emails for account verification.
