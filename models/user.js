module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
    first_name: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.associate = function(models) {
    // Associating User with Website
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Website, {
      onDelete: "cascade"
    });
  };

    return User;
}