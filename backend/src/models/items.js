const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
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
    enlace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'opciones',
        key: 'id'
      }
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "items_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
