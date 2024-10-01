const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: true
    },
    legajo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    id_dependencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dependencias',
        key: 'id'
      }
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
    id_leu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nro_documento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    domicilio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categorias',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'personas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "personas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
