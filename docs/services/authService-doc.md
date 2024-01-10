# File: `authService.js`

## Purpose
This file contains functions related to user authentication and registration for a Node.js application.

## Dependencies
- **Sequelize**: Database management library for handling SQL transactions.
- **Models**:
  - `User`: Model representing user data.
  - `UserOTP`: Model handling user OTP information.
- **Utils**:
  - `passwordUtils`: Module for password hashing and validation.
  - `jwtUtil`: Module for JWT token creation and verification.
  - `otpUtils`: Module for OTP generation and validation.
- **Services**:
  - `emailService`: Service for sending OTPs via email.
- **Middleware**:
  - `responseHandler`: Functions to handle various HTTP responses.

## Functions

### `login(req, res)`
- **Purpose**: Handles user login authentication.
- **Endpoint**: Implementation pending
- **Request Body**:
  - `email`: User's email.
  - `password`: User's password.
- **Steps**:
  - Finds the user by email in the database.
  - Validates the password; if valid, generates a JWT token.
  - Responds with a success message and token if authenticated, else sends an unauthorized response.
- **Error Handling**:
  - Manages user not found, invalid password, and server errors.

### `sendOTP(req, res)`
- **Purpose**: Sends OTP to a given email for user registration.
- **Endpoint**: Implementation pending
- **Request Body**:
  - `email`: User's email.
- **Steps**:
  - Checks if the user with the provided email exists.
  - Generates secret and OTP, saves it to the database, and sends the OTP via email.
  - Responds with a success message if OTP is sent successfully, else handles errors.
- **Error Handling**:
  - Handles existing user, email sending errors, and database interactions.

### `register(req, res)`
- **Purpose**: Handles user registration.
- **Endpoint**: Implementation pending
- **Request Body**:
  - `email`: User's email.
  - `password`: User's password.
  - `otp`: One-Time Password (OTP).
  - `mobile`: User's mobile number.
  - `name`: User's name.
- **Steps**:
  - Hashes the provided password.
  - Verifies OTP and user existence.
  - Updates user secret, creates a new user, and commits the transaction.
- **Error Handling**:
  - Manages missing OTP, invalid OTP, existing user, user creation errors, and database interactions.
