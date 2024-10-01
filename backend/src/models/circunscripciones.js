const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('circunscripciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'circunscripciones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "circunscripciones_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
