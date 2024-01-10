# File: `jwtUtil.js`

## Purpose
This file contains functions related to JWT (JSON Web Token) handling using the 'jsonwebtoken' library.

## Dependencies
- **jsonwebtoken**: Library for JWT creation and verification.
- **dotenv**: Module for loading environment variables.

## Variables
- **`secretKey`**: JWT secret key retrieved from environment variables.
- **`algorithms`**: Algorithm used for JWT (HS256 in this case).
- **`expiresIn`**: Token expiration time (e.g., 30 weeks).

## Functions

### `isValidToken(receivedToken)`
- **Purpose**: Verifies the validity of a received JWT token.
- **Parameters**:
  - `receivedToken`: JWT token to be verified.
- **Steps**:
  - Attempts to verify the token using the provided secret key and algorithm.
- **Returns**: `true` if the token is valid; otherwise, `false`.

### `sign(payload)`
- **Purpose**: Signs a JWT token with the provided payload.
- **Parameters**:
  - `payload`: Data to be included in the JWT payload.
- **Steps**:
  - Generates a signed JWT token using the provided payload, secret key, algorithm, and expiration time.
- **Returns**: Signed JWT token.

## Usage
The `sign` and `isValidToken` functions are exported for use in other files for JWT signing and verification.
