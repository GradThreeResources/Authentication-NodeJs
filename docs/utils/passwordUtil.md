# File: `passwordUtils.js`

## Purpose
This file contains functions related to password hashing and validation using the 'bcrypt' library.

## Dependencies
- **bcrypt**: Library for password hashing and comparison.

## Constants
- **`saltRounds`**: Number of salt rounds used for password hashing (set to 10).

## Functions

### `hashPassword(password)`
- **Purpose**: Hashes a password using bcrypt.
- **Parameters**:
  - `password`: The password to be hashed.
- **Returns**: A promise that resolves with the hashed password.
- **Steps**:
  - Hashes the provided password using bcrypt with the specified salt rounds.
- **Promise Resolution**: Resolves with the hashed password upon successful hashing.

### `isValidPassword(entered, userPassword)`
- **Purpose**: Compares an entered password with a stored hashed password.
- **Parameters**:
  - `entered`: The entered password.
  - `userPassword`: The stored hashed password.
- **Returns**: A boolean indicating if the passwords match.
- **Steps**:
  - Compares the entered password with the stored hashed password using bcrypt.
- **Return Value**: Returns `true` if the passwords match; otherwise, `false`.

## Export
The functions `hashPassword` and `isValidPassword` are exported for external use in other files for password hashing and validation.
