const { Client } = require("pg");

const client = new Client({
  user: "dbuser",
  host: "localhost",
  database: "mydb",
  password: "123456",
  port: 5432,
});

async function run() {
  await client.connect();

  // insert
  await client.query("INSERT INTO users(name, email) VALUES($1, $2)", [
    "PG User",
    "pg@email.com",
  ]);

  // select
  const res = await client.query(
    "SELECT * FROM users WHERE email='pg@email.com'"
  );

  console.log(res.rows);

  await client.end();
}

run();
