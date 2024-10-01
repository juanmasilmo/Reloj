import { Table, Column, Model, DataType, Index } from 'sequelize-typescript';

@Table({
  tableName: 'calendario_agente',
  schema: 'public',
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

  @Index('idx_legajo')
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
    type: DataType.INTEGER,
    allowNull: true,
  })
  borrado: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_abm: Date;

  @Column({
    type: DataType.STRING,
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