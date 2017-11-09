module.exports = function(sequelize, DataTypes) {
  var user_show = sequelize.define("user_show", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    watched: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return user_show;
};
