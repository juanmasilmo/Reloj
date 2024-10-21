import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";

@Table({
  tableName: "localidades",
  schema: "public",
  timestamps: false,
})
class Localidades extends Model {
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
  descripcion?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm?: string; // Uso de '?' para indicar que es opcional

  @ForeignKey(() => Circunscripciones) // Definición de la clave foránea
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_circunscripcion?: number; // Uso de '?' para indicar que es opcional
}

export default Localidades;
