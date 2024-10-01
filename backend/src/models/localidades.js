const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('localidades', {
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
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_circunscripcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'circunscripciones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'localidades',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "localidades_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
