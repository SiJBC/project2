module.exports = function(sequelize, DataTypes) {
    
    var Website = sequelize.define("Website", {
        title: DataTypes.STRING,
        tagline: DataTypes.STRING,
        header_image: DataTypes.BLOB,
        block_1_image: DataTypes.BLOB,
        block_1_head: DataTypes.STRING,
        block_1_text: DataTypes.TEXT,
        block_2_image: DataTypes.BLOB,
        block_2_head: DataTypes.STRING,
        block_2_text: DataTypes.TEXT,
        block_3_image: DataTypes.BLOB,
        block_3_head: DataTypes.STRING,
        block_3_text: DataTypes.TEXT, 
        e_mail: DataTypes.STRING,
        phone: DataTypes.STRING,
        place_location: DataTypes.STRING,
        })

        Website.associate = function(models) {
            // Associating post with User, require foreign key. 
            Website.belongsTo(models.User, {
              foreignKey: {
                allowNull: false
              }
            });
          };

    return Website;
}