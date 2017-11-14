module.exports = function(sequelize, DataTypes) {
  var Show = sequelize.define("show", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    OMDB_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imgURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contentURL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Show.associate = function (models) {
      Show.belongsToMany(models.user, {
          through: {
              model: models.user_show,
              unique: false
          },
          foreignKey: 'user_id',
          constraints: false
      });
  }

  return Show;
};
