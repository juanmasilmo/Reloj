const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_leu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nro_articulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inciso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidad_mensual: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cantitad_anual: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inasistencias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    licencias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    retiro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tardanza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    excluye_feria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tipo_licencias: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sin_fecha_fin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    cobra_presentismo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c_manual: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 - sincroniza leu 1 - carga manual"
    },
    desc_pasajes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "-- 0 No descuenta -- 1  descuenta pasajes"
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "articulos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
