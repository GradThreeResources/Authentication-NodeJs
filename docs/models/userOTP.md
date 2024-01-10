# File: `userOTP.js`

## Purpose
This file defines the 'UserOTP' model using Sequelize and provides a function to create or update a user OTP secret in the database.

## Dependencies
- **Sequelize**: Library for interacting with SQL databases.
- **Database Configuration**: `sequelize` instance from the database configuration.

## Model Definition and Function

### `UserOTP` Model Definition
- **Table Name**: 'user_secret'
- **Attributes**:
  - `email`: String (Primary key)
  - `OtpSecret`: String with a default value of 'NONE'
- **Configuration**:
  - Disables automatic creation of `createdAt` and `updatedAt` columns.

### `createUserOTP(email, OtpSecret, transaction)`
- **Purpose**: Creates or updates a user OTP secret in the database.
- **Parameters**:
  - `email`: Email address of the user.
  - `OtpSecret`: User's OTP secret.
  - `transaction`: Transaction object for handling database transactions.
- **Steps**:
  - Uses the `upsert()` method of the `UserOTP` model to create or update a user OTP with the provided details.
  - Commits the transaction.
- **Error Handling**:
  - Catches and logs any errors that occur during user OTP creation or update.

## Exported Modules
- `UserOTP`: Defined Sequelize 'UserOTP' model.
- `createUserOTP`: Function to create or update a user OTP secret in the database.
