const assert = require('assert')
const totpUtil = require('../../utils/otpUtils');


describe('TOTP Util', () => {
  describe('generateSecret function', () => {
    it('should generate a valid secret', () => {
      const secret = totpUtil.generateSecret();

      // Ensure the secret is a non-empty string
      assert.ok(typeof secret === 'string' && secret.length > 0);
    });
  });

  describe('generateTOTP function', () => {
    it('should generate a valid TOTP', () => {
      const secret = totpUtil.generateSecret();
      const totpCode = totpUtil.generateTOTP(secret);

      // Ensure the TOTP code is a non-empty string
      assert.ok(typeof totpCode === 'string' && totpCode.length > 0);
    });
  });

  describe('isValidOTP function', () => {
    it('should validate a valid TOTP', () => {
      const secret = totpUtil.generateSecret();
      const totpCode = totpUtil.generateTOTP(secret);

      // Ensure the TOTP code is valid
      const isValid = totpUtil.isValidOTP(secret, totpCode);
      assert.strictEqual(isValid, true);
    });

    it('should invalidate an invalid TOTP', () => {
      const secret = totpUtil.generateSecret();
      const invalidTotpCode = 'invalid-totp-code';

      // Ensure the TOTP code is invalid
      const isValid = totpUtil.isValidOTP(secret, invalidTotpCode);
      assert.strictEqual(isValid, false);
    });

 
  });
});
