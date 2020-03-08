module.exports = function(sequelize, DataTypes) {
  var Answers = sequelize.define("Answers", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },

    answerArr: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Answers.associate = function(models) {
    // We're saying that a Answrrs should belong to an Profile
    // A Answer can't be created without an Profile due to the foreign key constraint
    Answers.belongsTo(models.Profiles, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Answers;
};
