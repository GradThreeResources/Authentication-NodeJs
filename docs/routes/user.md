# File: `userRoutes.js`

## Purpose
This file defines various routes using Express Router for user-related functionalities such as registration, OTP sending, and login.

## Dependencies
- **Express**: Framework for building web applications in Node.js.
- **Middlewares**:
  - `validateUserData`: Validates user data for registration.
  - `validateOTPRequest`: Validates OTP request data.
  - `validateLoginData`: Validates login data.
  - `authenticate`: Middleware for user authentication.

## Route Definitions

### `POST /register`
- **Purpose**: Handles user registration.
- **Middleware**: Utilizes `validateUserData`.
- **Controller**: Executes `register` from `authService`.

### `POST /send_otp`
- **Purpose**: Sends OTP via email.
- **Middleware**: Utilizes `validateOTPRequest`.
- **Controller**: Executes `sendOTP` from `authService`.

### `POST /login`
- **Purpose**: Handles user login.
- **Middleware**: Utilizes `validateLoginData`.
- **Controller**: Executes `login` from `authService`.

### `GET /data`
- **Purpose**: Endpoint for testing; returns 'data'.
- **Middleware**: Utilizes `authenticate`.
- **Controller**: Sends 'data' as a response.

## Exported Router
- `userRouter`: Instance of Express Router containing all defined routes.
