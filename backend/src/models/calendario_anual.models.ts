import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  Index,
} from "sequelize-typescript";
import { Estados } from "./estados.models"; // Asegúrate de que el modelo 'Estados' esté correctamente importado

@Table({
  tableName: "calendario_anual",
  schema: "public",
  timestamps: false,
})
class CalendarioAnual extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Estados)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_estado: number;

  @Index("idx_fecha_inicio") // Defino el índice sin unique si no quieres restringir duplicados
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_inicio: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_fin: Date;

  @Column({
    type: DataType.STRING(50), // Definir una longitud máxima para la columna string
    allowNull: true,
  })
  usuario_abm: string;
}

export default CalendarioAnual;
