const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instructivo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url_video: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url_documento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'instructivo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "instructivo_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
