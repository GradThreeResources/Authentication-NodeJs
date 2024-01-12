// middleware.test.js

const supertest = require("supertest");
const assert = require("assert");

// Import the middleware functions
const {
  authenticate,
  validateUserData,
  validateOTPRequest,
  validateLoginData,
} = require("../../middleware/userAuthenticationMiddleware");

describe("Middleware", () => {
  it("should authenticate and allow access to protected route", (done) => {
    const app = supertest(
      expressAppWithMiddleware(authenticate, (req, res) => res.send("data"))
    );

    // Simulate making a request to the protected route with a valid token
    app
      .get("/data")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1kaWFhbjQwNEBnbWFpbC5jb20iLCJpYXQiOjE3MDQ4NzM2ODksImV4cCI6MTcyMzAxNzY4OX0.rPg_fIXMxxAa6noWJ7WCz09vDlhN2Nu8j-xRNh0v2tM"
      )
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        // Make assertions using assert module
        assert.strictEqual(res.text, "data");

        done();
      });
  });

  it("should reject access to protected route without valid authentication", (done) => {
    const app = supertest(
      expressAppWithMiddleware(authenticate, (req, res) => res.send("data"))
    );

    // Simulate making a request to the protected route without a valid token
    app
      .get("/data")
      .set(
        "Authorization",
        "Bearer in-valid"
      )
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);

        // Make assertions using assert module
        assert.strictEqual(res.body.success, false);
        assert.strictEqual(res.body.message, "Invalid Token");

        done();
      });
  });

  it("should validate user data during registration", (done) => {
    const app = supertest(
      expressAppWithMiddleware(validateUserData, (req, res) =>
        res.json({ success: true })
      )
    );

    // Simulate making a request to the registration route with invalid user data
    app
      .post("/register")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);

        // Make assertions using assert module
        assert.strictEqual(res.body.success, false);
        assert.strictEqual(
          res.body.message,
          "Bad Request: Incomplete or incorrect information"
        );

        done();
      });
  });

  it ("should validate OTP request", (done=>{
    const app = supertest(expressAppWithMiddleware(validateOTPRequest, (req, res)=>{
        res.json({'success':true})
   }))
   app.post('/send_otp').send({}).expect(400).end((error, res)=>{
    if (error){
        return done(error)
    }
    assert.strictEqual(res.status, 400)
    assert.ok( ! res.body.success)
    done()
   })

  }))

  it('should validate OTP with valid body', (done)=>{
    const app = supertest(expressAppWithMiddleware(validateOTPRequest, (req, res)=>{
        res.json({'success':true})
    }))
    app.post('/send_otp').send({email:"email@email.com"}).expect(200).end((error, res)=>{
        if (error){
            return done(error)
        }
        assert.ok(res.body.success, true)
        assert.strictEqual(res.status, 200)
        done()
    })
  })

  it("should validate login data", (done) => {
    const app = supertest(
      expressAppWithMiddleware(validateLoginData, (req, res) =>
        res.json({ success: true })
      )
    );

    // Simulate making a request to the login route with invalid login data
    app
      .post("/login")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);

        // Make assertions using assert module
        assert.strictEqual(res.body.success, false);
        assert.strictEqual(
          res.body.message,
          "Bad Request: Incomplete or incorrect information"
        );

        done();
      });
  });
});

// Helper function to create an Express app with specified middleware
function expressAppWithMiddleware(middleware, routeHandler) {
  const express = require("express");
  const app = express();

  app.use(express.json());
  app.use(middleware);
  app.use(routeHandler);

  return app;
}
