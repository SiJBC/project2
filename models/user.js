module.exports = function(sequelize, DataTypes) {

    var Website = sequelize.define("page_table", {
    user_id: INT NOT NULL AUTO_INCREMENT,
    first_name: VARCHAR(50) NOT NULL,
    last_name: VARCHAR(50) NOT NULL,
    PRIMARY: KEY (user_id)
})
    return user_table;
}