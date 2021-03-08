'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    imgUrl: DataTypes.STRING,
    postBody: DataTypes.TEXT,
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    bookmarkId: DataTypes.INTEGER
  }, {});
  Story.associate = function(models) {
    Story.belongsTo(models.User, { foreignKey: "userId"});
    Story.hasMany(models.User, {
      through: "Like",
      foreignKey: "storyId",
      otherKey: "userId"
    });

    Story.hasMany(models.Comment, {foreignKey: "storyId"});


    Story.hasMany(models.User, {
      through: "Bookmark",
      foreignKey: "storyId",
      otherKey: "userId"
    });

  };
  return Story;
};
