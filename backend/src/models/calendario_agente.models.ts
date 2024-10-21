import { Table, Column, Model, DataType, Index } from "sequelize-typescript";

@Table({
  tableName: "calendario_agente",
  schema: "public",
  timestamps: false,
})
class CalendarioAgente extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Index("idx_legajo") // Si este índice es único, puedes añadir: { unique: true }
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  legajo: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  registro: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  registro_modificado: Date;

  @Column({
    type: DataType.INTEGER, // Si es un indicador de borrado, podrías usar DataType.BOOLEAN
    allowNull: true,
  })
  borrado: number; // O considera cambiar a: borrado: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_abm: Date;

  @Column({
    type: DataType.STRING(50), // Definir longitud máxima si es posible
    allowNull: true,
  })
  usuario_abm: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  leu: number;
}

export default CalendarioAgente;
