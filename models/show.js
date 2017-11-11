module.exports = function(sequelize, DataTypes) {
  var Show = sequelize.define("Show", {
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

  Show.associate = function(models) {
    Show.belongsToMany(models.User, {
      foreignKey: {
        allowNull: false
      },
      through: models.user_show
    });
  };

  return Show;
};
