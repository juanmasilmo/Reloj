const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "usuarios_usuario_key"
    },
    nombre_apellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupos',
        key: 'id'
      }
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    fecha_baja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_abm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    carga_registro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 - solo articulos 1 - carga registros + articulos"
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuarios_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "usuarios_usuario_key",
        unique: true,
        fields: [
          { name: "usuario" },
        ]
      },
    ]
  });
};
