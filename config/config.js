require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: "root",
    password: process.env.DEV_PASSWORD,
    database: "friendMatchdb",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
