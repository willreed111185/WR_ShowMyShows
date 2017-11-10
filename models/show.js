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

  return Show;
};
