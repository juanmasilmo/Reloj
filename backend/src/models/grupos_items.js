const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupos_items', {
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupos',
        key: 'id'
      }
    },
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'items',
        key: 'id'
      }
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'grupos_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "grupos_items_pk",
        unique: true,
        fields: [
          { name: "id_grupo" },
          { name: "id_item" },
        ]
      },
    ]
  });
};
