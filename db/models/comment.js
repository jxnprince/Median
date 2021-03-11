'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, {
      foreignKey: "userId",
      // onDelete: 'CASCADE',
      // hooks: true
    });
    Comment.belongsTo(models.Story, {
      foreignKey: "storyId",
      // onDelete: 'CASCADE',
      // hooks: true
    });

  };
  return Comment;
};
