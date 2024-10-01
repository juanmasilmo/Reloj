const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_dependencias', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    id_dependencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dependencias',
        key: 'id'
      }
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario_dependencias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuario_dependencias_pkey",
        unique: true,
        fields: [
          { name: "id_usuario" },
          { name: "id_dependencia" },
        ]
      },
    ]
  });
};
