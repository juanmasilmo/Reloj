import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "grupos",
  schema: "public",
  timestamps: false,
})
class Grupos extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100), // Longitud máxima recomendada
    allowNull: true,
  })
  descripcion?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  estado?: number; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING(50), // Longitud máxima recomendada
    allowNull: true,
  })
  usuario_abm?: string; // Uso de '?' para indicar que es opcional
}

export default Grupos;
