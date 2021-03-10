'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    imgUrl: DataTypes.STRING,
    postBody: DataTypes.TEXT,
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Story.associate = function (models) {
    Story.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: 'CASCADE',
      hooks: true
    });
    Story.belongsToMany(models.User, {
      through: "Like",
      foreignKey: "storyId",
      otherKey: "userId",
      as: "UserLikes",
      // onDelete: 'CASCADE',
      // hooks: true
    });

    Story.hasMany(models.Comment, {
      foreignKey: "storyId",
      // onDelete: 'CASCADE',
      // hooks: true
    });


    Story.belongsToMany(models.User, {
      through: "Bookmark",
      foreignKey: "storyId",
      otherKey: "userId",
      // onDelete: 'CASCADE',
      // hooks: true
    });

  };
  return Story;
};
