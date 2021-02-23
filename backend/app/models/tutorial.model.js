module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    photo: {
      type: Sequelize.STRING,
    },
    provider: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    idIndex: {
      type: Sequelize.STRING,
    },
    sex: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    phone: {
      type: Sequelize.STRING,
    },
    order: {
      type: Sequelize.INTEGER,
    },
    processByName: {
      type: Sequelize.STRING,
    },
    processByEmail: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
    subtotal: {
      type: Sequelize.INTEGER,
    },
    covered: {
      type: Sequelize.INTEGER,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Tutorial;
};
