const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://dbuser:123456@localhost:5432/mydb");
const User = require("./User")(sequelize);

async function run() {
  // insert
  await User.create({ name: "Sequelize User", email: "sequelize@email.com" });

  // select
  const user = await User.findOne({ where: { email: "sequelize@email.com" } });

  console.log(user.toJSON());

  await sequelize.close();
}

run();

const user = await User.findOne({
  where: { email: "sequelize@email.com" },
  include: Post,
});
