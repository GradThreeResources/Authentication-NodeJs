const assert = require('assert');
const jwtUtil = require('../../utils/jwtUtil');

describe('JWT Util', () => {
  describe('sign function', () => {
    it('should sign a valid token', () => {
      const payload = { userId: '123', username: 'testuser' };
      const signedToken = jwtUtil.sign(payload);

      // Ensure the signed token is a non-empty string
      assert.ok(typeof signedToken === 'string' && signedToken.length > 0);
    });

    
  });

  describe('isValidToken function', () => {
    it('should validate a valid token', () => {
      const payload = { userId: '123', username: 'testuser' };
      const signedToken = jwtUtil.sign(payload);

      // Ensure the token is valid
      const isValid = jwtUtil.isValidToken(signedToken);
      assert.strictEqual(isValid, true); // strictEqual means ====
    });

    it('should invalidate an invalid token', () => {
      const invalidToken = 'invalid-token';

      // Ensure the token is invalid
      const isValid = jwtUtil.isValidToken(invalidToken);
      assert.strictEqual(isValid, false);
    });

  
  });
});
