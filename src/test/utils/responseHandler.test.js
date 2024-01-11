const assert = require('assert');
const responseUtil = require('../../utils/responseHandler');


describe('Response Util', () => {
  describe('sendSuccessResponse function', () => {
    it('should send a success response', () => {
      const mockRes = {
        status: (code) => ({ json: (data) => ({ code, data }) }),
      };

      const data = { result: 'success' };

      // Send a success response
      const response = responseUtil.sendSuccessResponse(mockRes, data);

      // Ensure the response contains the success flag and the provided data
      assert.strictEqual(response.code, 200);
      assert.strictEqual(response.data.success, true);
      assert.deepStrictEqual(response.data.data, data);
    });

  });

  describe('sendErrorResponse function', () => {
    it('should send an error response', () => {
      const mockRes = {
        status: (code) => ({ json: (data) => ({ code, data }) }),
      };

      // Send an error response
      const response = responseUtil.sendErrorResponse(mockRes);

      // Ensure the response contains the success flag and the provided message
      assert.strictEqual(response.code, 500);
      assert.strictEqual(response.data.success, false);
      assert.strictEqual(response.data.message, 'Server Error');
    });

  });

  describe('sendConflictResponse function', () => {
    it('should send a conflict response', () => {
      const mockRes = {
        status: (code) => ({ json: (data) => ({ code, data }) }),
      };

      // Send a conflict response
      const response = responseUtil.sendConflictResponse(mockRes);

      // Ensure the response contains the success flag and the provided message
      assert.strictEqual(response.code, 409);
      assert.strictEqual(response.data.success, false);
      assert.strictEqual(response.data.message, 'Conflict: User already exists');
    });

  });

  describe('sendBadRequestResponse function', () => {
    it('should send a bad request response', () => {
      const mockRes = {
        status: (code) => ({ json: (data) => ({ code, data }) }),
      };

      // Send a bad request response
      const response = responseUtil.sendBadRequestResponse(mockRes);

      // Ensure the response contains the success flag and the provided message
      assert.strictEqual(response.code, 400);
      assert.strictEqual(response.data.success, false);
      assert.strictEqual(response.data.message, 'Bad Request: Incomplete or incorrect information');
    });

  });

  describe('sendUnAuthorized function', () => {
    it('should send an unauthorized response', () => {
      const mockRes = {
        status: (code) => ({ json: (data) => ({ code, data }) }),
      };

      // Send an unauthorized response
      const response = responseUtil.sendUnAuthorized(mockRes);

      // Ensure the response contains the success flag and the provided message
      assert.strictEqual(response.code, 401);
      assert.strictEqual(response.data.success, false);
      assert.strictEqual(response.data.message, 'Unauthorized');
    });

  });
});
