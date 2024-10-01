const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dependencias', {
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
    id_localidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'localidades',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    padre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_leu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dependencias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dependencias_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
