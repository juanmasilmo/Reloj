const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorias', {
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
    cod_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion_tipo_categoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_leu: {
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
    },
    listar_reporte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    presentismo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pasajes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'categorias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categorias_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
