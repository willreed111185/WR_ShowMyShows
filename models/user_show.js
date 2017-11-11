module.exports = function(sequelize, DataTypes) {
  var user_show = sequelize.define("user_show", {
    relation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  return user_show;
};