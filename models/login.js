module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Login;
};
