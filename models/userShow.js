module.exports = function(sequelize, DataTypes) {
  const userShow = sequelize.define("user_show", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    relation: {
        type: DataTypes.STRING,
        unique: false
    }
  });

    userShow.associate = function (models) {
      userShow.belongsTo(models.user);
      userShow.belongsTo(models.show);
  }

  return userShow;
};