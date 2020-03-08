module.exports = function(sequelize, DataTypes) {
  var Connections = sequelize.define("Connections", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },

    connection: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Connections;
};
