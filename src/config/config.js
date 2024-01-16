require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DATABASE_LOCAL_URL,
    dialect: "postgres",
  },
  test: {
    username: "mdiaa",
    password: "postgres",
    database: "dubi-test",
    host: "192.168.1.100",
    dialect: "postgres",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions : {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  },
};
