const knex = require("knex");
const config = require("../../knexfile.js").development;
const db = knex(config);

async function run() {
  // insert
  await db("users").insert({ name: "Knex User", email: "knex@email.com" });

  // select
  const rows = await db
    .from("users")
    .select()
    .where({ email: "knex@email.com" });

  console.log(rows);

  await db.destroy();
}

run();
