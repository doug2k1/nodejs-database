const Sequelize = require("sequelize");

function defineUser(sequelize) {
  const User = sequelize.define(
    "user",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return User;
}

module.exports = defineUser;
