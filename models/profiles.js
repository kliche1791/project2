module.exports = function(sequelize, DataTypes) {
  var Profiles = sequelize.define("Profiles", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Profiles.associate = function(models) {
    // Associating Profiles with Answers
    // When an Author is deleted, also delete any associated Answers
    Profiles.hasMany(models.Answers, {
      onDelete: "cascade"
    });
  };

  return Profiles;
};
