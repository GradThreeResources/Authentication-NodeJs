# File: `otpUtils.js`

## Purpose
This file contains functions related to One-Time Password (OTP) generation and verification using the 'speakeasy' library.

## Dependencies
- **speakeasy**: Library for OTP generation and verification.

## Constants
- **`STEPS`**: Time step interval for TOTP (Time-Based One-Time Password) code generation (120 seconds).

## Functions

### `generateSecret()`
- **Purpose**: Generates a secret key for a user.
- **Steps**:
  - Generates a secret key of length 20 characters using the 'speakeasy' library.
- **Returns**: Base32 encoded secret key.

### `generateTOTP(secret)`
- **Purpose**: Generates a TOTP (Time-Based One-Time Password) code based on the provided secret.
- **Parameters**:
  - `secret`: Secret key used to generate the TOTP code.
- **Steps**:
  - Generates a TOTP code using the secret key, with a time step interval of 120 seconds.
- **Returns**: TOTP code.

### `isValidOTP(secret, token)`
- **Purpose**: Verifies a TOTP code entered by the user.
- **Parameters**:
  - `secret`: Secret key associated with the TOTP code.
  - `token`: TOTP code entered by the user.
- **Steps**:
  - Verifies the entered TOTP code against the secret key with a tolerance window of 0 (exact match required).
- **Returns**: `true` if the entered TOTP code is valid; otherwise, `false`.

## Export
The functions `isValidOTP`, `generateTOTP`, and `generateSecret` are exported for use in other files for OTP verification and code generation.
