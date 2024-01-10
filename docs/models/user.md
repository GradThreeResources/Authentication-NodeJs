# File: `user.js`

## Purpose
This file defines the 'User' model using Sequelize, and provides a function to create a new user in the database.

## Dependencies
- **Sequelize**: Library for interacting with SQL databases.
- **Database Configuration**: `sequelize` instance from the database configuration.

## Model Definition and Function

### `User` Model Definition
- **Attributes**:
  - `id`: Integer (Auto-increment, Primary key)
  - `name`: String
  - `password`: String
  - `mobile`: String
  - `email`: String
- **Configuration**:
  - Disables automatic creation of `createdAt` and `updatedAt` columns.

### `createUser(name, email, password, mobile, transaction)`
- **Purpose**: Creates a new user in the database.
- **Parameters**:
  - `name`: User's name.
  - `email`: User's email.
  - `password`: User's password.
  - `mobile`: User's mobile number.
  - `transaction`: Transaction object for handling database transactions.
- **Steps**:
  - Uses the `create()` method of the `User` model to create a new user with the provided details.
  - Commits the transaction.
- **Error Handling**:
  - Catches and logs any errors that occur during user creation.

## Exported Modules
- `createUser`: Function to create a new user in the database.
- `User`: Defined Sequelize 'User' model.
