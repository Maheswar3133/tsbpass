// require("dotenv").config();
module.exports = {
  development: {
    username: "tsbpass",
    password: 123456789,
    database: "tsbpass",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
