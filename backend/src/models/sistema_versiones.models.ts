import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "sistema_versiones",
  schema: "public",
  timestamps: false,
})
class SistemaVersiones extends Model {
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
  tag?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  descripcion?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.fn("now"), // Uso de DataType.fn en lugar de Sequelize.Sequelize.fn
  })
  fecha?: Date; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm?: string; // Uso de '?' para indicar que es opcional
}

export default SistemaVersiones;
