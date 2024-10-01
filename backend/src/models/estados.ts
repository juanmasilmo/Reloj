import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'estados',
  schema: 'public',
  timestamps: false,
})
class Estados extends Model {
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
  descripcion: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  letra: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  color: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm: string;
}

export default Estados;
