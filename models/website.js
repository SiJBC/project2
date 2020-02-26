module.exports = function(sequelize, DataTypes) {
    
    var Website = sequelize.define("Website", {
        header: DataTypes.STRING,
        body: DataTypes.STRING,
        footer: DataTypes.STRING
    })

    return Website;
}