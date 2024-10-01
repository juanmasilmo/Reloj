const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupos_opciones', {
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupos',
        key: 'id'
      }
    },
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'opciones',
        key: 'id'
      }
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'grupos_opciones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "grupos_opciones_pk",
        unique: true,
        fields: [
          { name: "id_grupo" },
          { name: "id_opcion" },
        ]
      },
    ]
  });
};
