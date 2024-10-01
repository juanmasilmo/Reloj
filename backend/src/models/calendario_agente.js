const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calendario_agente', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    legajo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    registro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    registro_modificado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    borrado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_abm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    leu: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'calendario_agente',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "calendario_agente_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_legajo",
        fields: [
          { name: "legajo" },
        ]
      },
    ]
  });
};
