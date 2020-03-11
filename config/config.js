require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: "d89vdvork862m3s7",
    password: process.env.DEV_PASSWORD,
    database: "e0tu5mf8ikz74kwo",
    host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
