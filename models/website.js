module.exports = function(sequelize, DataTypes) {
    
    var Website = sequelize.define("page_table", {
        page_id: INT NOT NULL AUTO_INCREMENT,
        user_id: INT NOT NULL,
        // FOREIGN KEY (user_id) REFERENCES user_table(user_id),
        title: VARCHAR(70),
        tagline: VARCHAR(265),
        header_image: BLOB,
        block_1_image: BLOB,
        block_1_head: VARCHAR(70),
        block_1_text: TEXT,
        block_2_image: BLOB,
        block_2_head: VARCHAR(70),
        block_2_text: TEXT,
        block_3_image: BLOB,
        block_3_head: VARCHAR(70),
        block_3_text: TEXT, 
        e_mail: VARCHAR(100),
        phone: VARCHAR(15),
        place_location: VARCHAR(100),
        // PRIMARY KEY (page_id)
    })

    return page_table;
}