import { Table, Column, Model, DataType, ForeignKey, Index } from 'sequelize-typescript';
import { Estados } from './estados';  // Asegúrate de importar correctamente el modelo relacionado

@Table({
  tableName: 'calendario_anual',
  schema: 'public',
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

  @Index('fecha_inicio')
  @Column({
    type: DataType.DATE,
    allowNull: true,
    unique: true,
  })
  fecha_inicio: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_fin: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm: string;
}

export default CalendarioAnual;
