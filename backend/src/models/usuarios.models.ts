import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "usuarios",
  schema: "public",
  timestamps: false,
})
class Usuarios extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: "usuarios_usuario_key",
  })
  usuario?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  nombre_apellido?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  clave?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  estado?: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    references: {
      model: "grupos",
      key: "id",
    },
  })
  id_grupo?: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  activo?: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.fn("now"),
  })
  fecha_alta?: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_baja?: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: "0 - solo articulos 1 - carga registros + articulos",
  })
  carga_registro!: number; // No opcional ya que es 'allowNull: false'
}

export default Usuarios;
