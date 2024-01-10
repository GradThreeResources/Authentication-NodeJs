# File: `userAuthenticationMiddleware.js`

## Purpose
This file contains middleware functions used for request validation and authentication in an Express application related to user authentication.

## Dependencies
- **Response Handling**:
  - `sendBadRequestResponse`: Handles bad request responses.
  - `sendUnAuthorized`: Handles unauthorized responses.
- **JWT Utilities**:
  - `isValidToken`: Validates JWT tokens.

## Middleware Functions

### `validateOTPRequest(req, res, next)`
- **Purpose**: Validates the request for OTP validation endpoint.
- **Expectation**: Expects 'email' and 'otp' in the request body.
- **Steps**:
  - Checks if 'email' is present in the request body.
  - Sends a Bad Request response if 'email' is missing.
  - Proceeds to the next middleware or route handler if 'email' exists.

### `validateUserData(req, res, next)`
- **Purpose**: Validates user data for sign-up.
- **Expectation**: Expects 'name', 'email', 'mobile', 'password', and 'otp' in the request body.
- **Steps**:
  - Checks if all required fields are present in the request body.
  - Sends a Bad Request response if any required field is missing.
  - Proceeds to the next middleware or route handler if all required fields exist.

### `validateLoginData(req, res, next)`
- **Purpose**: Validates login data.
- **Expectation**: Expects 'email' and 'password' in the request body.
- **Steps**:
  - Checks if 'email' and 'password' are present in the request body.
  - Sends a Bad Request response if either 'email' or 'password' is missing.
  - Proceeds to the next middleware or route handler if both 'email' and 'password' exist.

### `authenticate(req, res, next)`
- **Purpose**: Authenticates requests using JWT token.
- **Steps**:
  - Extracts the token from the Authorization header in the request.
  - Sends a Bad Request response if the token is missing.
  - Validates the token using `isValidToken`.
  - Sends an Unauthorized response if the token is invalid.
  - Proceeds to the next middleware or route handler if the token is valid.
