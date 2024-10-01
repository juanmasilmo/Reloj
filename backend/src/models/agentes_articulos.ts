import { Table, Column, Model, DataType, Default } from 'sequelize-typescript';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentes_articulos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_licencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_agente_leu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_desde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_hasta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_articulo_leu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cant_dias: {
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
    id_articulo_reloj: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agentes_articulos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "agentes_articulos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
