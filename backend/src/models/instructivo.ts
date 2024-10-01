import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'instructivo',
  schema: 'public',
  timestamps: false,
})
class Instructivo extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  titulo: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  descripcion?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  url_video?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  url_documento?: string; // Uso de '?' para indicar que es opcional
}

export default Instructivo;
