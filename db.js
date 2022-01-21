const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "em718650",
  host: "localhost",
  port: 5432,
  database: "uc",
});

module.exports = pool;
