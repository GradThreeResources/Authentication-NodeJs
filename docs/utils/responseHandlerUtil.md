# File: `responseHandler.js`

## Purpose
This file contains functions to handle various HTTP responses such as success, error, conflict, bad request, and unauthorized responses.

## Functions

### `sendSuccessResponse(res, data, message = 'Success')`
- **Purpose**: Sends a success response.
- **Parameters**:
  - `res`: Express response object.
  - `data`: Data to be sent in the response.
  - `message` (optional): Message to be sent (default: 'Success').
- **Returns**: Sends a JSON response with a success status (200) containing the provided data and message.

### `sendErrorResponse(res, statusCode = 500, message = 'Server Error')`
- **Purpose**: Sends an error response.
- **Parameters**:
  - `res`: Express response object.
  - `statusCode` (optional): HTTP status code for the error response (default: 500).
  - `message` (optional): Error message to be sent (default: 'Server Error').
- **Returns**: Sends a JSON response with the specified status code containing a failure message.

### `sendConflictResponse(res, message = 'Conflict: User already exists')`
- **Purpose**: Sends a conflict response (e.g., for existing user conflicts).
- **Parameters**:
  - `res`: Express response object.
  - `message` (optional): Conflict message to be sent (default: 'Conflict: User already exists').
- **Returns**: Sends a JSON response with a status code 409 (Conflict) containing the specified message.

### `sendBadRequestResponse(res, message = 'Bad Request: Incomplete or incorrect information')`
- **Purpose**: Sends a bad request response (e.g., for incomplete or incorrect information).
- **Parameters**:
  - `res`: Express response object.
  - `message` (optional): Bad request message to be sent (default: 'Bad Request: Incomplete or incorrect information').
- **Returns**: Sends a JSON response with a status code 400 (Bad Request) containing the specified message.

### `sendUnAuthorized(res, message = "Unauthorized")`
- **Purpose**: Sends an unauthorized response.
- **Parameters**:
  - `res`: Express response object.
  - `message` (optional): Unauthorized message to be sent (default: 'Unauthorized').
- **Returns**: Sends a JSON response with a status code 401 (Unauthorized) containing the specified message.

## Export
The file exports the functions `sendSuccessResponse`, `sendErrorResponse`, `sendConflictResponse`, `sendBadRequestResponse`, and `sendUnAuthorized` for usage in other files to handle various types of HTTP responses.
