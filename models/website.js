module.exports = function (sequelize, DataTypes) {

  var Website = sequelize.define("Website", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 140]
      }
    },
    tagline: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 140]
      }
    },
    header_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    block_1_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    block_1_head: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    block_1_text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    block_2_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    block_2_head: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 140]
      }
    },
    block_2_text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    block_3_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    block_3_head: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    block_3_text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    e_mail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    place_location: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    // Website.associate = function(models) {
    //     // Associating post with User, require foreign key. 
    //     Website.belongsTo(models.User, {
    //       foreignKey: {
    //         allowNull: false
    // }
    // });
  });
  return Website;
}