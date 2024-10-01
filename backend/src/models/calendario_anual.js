const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calendario_anual', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'estados',
        key: 'id'
      }
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: "fecha_inicio"
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'calendario_anual',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "calendario_anual_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fecha_inicio",
        unique: true,
        fields: [
          { name: "fecha_inicio" },
        ]
      },
    ]
  });
};
