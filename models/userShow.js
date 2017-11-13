module.exports = function(sequelize, DataTypes) {
  const userShow = sequelize.define("user_show", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    show_id: {
        type: DataTypes.INTEGER,
        unique: 'user_show_taggable'
    },
    relation: {
        type: DataTypes.STRING,
        unique: 'user_show_taggable'
    },
    user_id: {
        type: DataTypes.INTEGER,
        unique: 'user_show_taggable',
        references: null
    }
  });

  return userShow;
};