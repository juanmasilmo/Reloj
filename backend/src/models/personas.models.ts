import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "personas",
  schema: "public",
  timestamps: false,
})
class Personas extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  apellido?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  nombres?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  legajo?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  correo?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  activo?: number; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    references: {
      model: "dependencias",
      key: "id",
    },
  })
  id_dependencia?: number; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  estado?: number; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_leu?: number; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  nro_documento?: number; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  fecha_nacimiento?: Date; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  domicilio?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    references: {
      model: "categorias",
      key: "id",
    },
  })
  id_categoria?: number; // Uso de '?' para indicar que es opcional
}

export default Personas;
