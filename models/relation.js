module.exports = function(sequelize, DataTypes) {
  var Relation = sequelize.define("Relation", {
    relationship: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Relation;
};