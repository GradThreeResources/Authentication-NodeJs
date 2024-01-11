const assert = require('assert');
const bcryptUtil = require('../../utils/passwordUtils');

describe('Bcrypt Util', () => {
  describe('hashPassword function', () => {
    it('should hash a password', async () => {
      const password = 'testPassword';

      // Hash the password using bcrypt
      const hashedPassword = await bcryptUtil.hashPassword(password);

      // Ensure the hashed password is a non-empty string
      assert.ok(typeof hashedPassword === 'string' && hashedPassword.length > 0);
    });

    // Add more test cases for different scenarios, if needed
  });

  describe('isValidPassword function', () => {
    it('should validate a valid password', async () => {
      const password = 'testPassword';
      const hashedPassword = await bcryptUtil.hashPassword(password);

      // Validate the entered password against the hashed password
      const isValid = await bcryptUtil.isValidPassword(password, hashedPassword);

      // Ensure the passwords match
      assert.strictEqual(isValid, true);
    });

    it('should invalidate an invalid password', async () => {
      const password = 'testPassword';
      const incorrectPassword = 'incorrectPassword';
      const hashedPassword = await bcryptUtil.hashPassword(password);

      // Validate the incorrect password against the hashed password
      const isValid = await bcryptUtil.isValidPassword(incorrectPassword, hashedPassword);

      // Ensure the passwords do not match
      assert.strictEqual(isValid, false);
    });

    // Add more test cases for different scenarios, if needed
  });
});
