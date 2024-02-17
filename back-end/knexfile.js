const path = require("path");
require('dotenv').config();


const {
  DATABASE_URL = "postgresql://postgres@localhost/postgres",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
