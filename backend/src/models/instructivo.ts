import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Categorias from './categorias';

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
    validate: {
      len: [1, 255], // Limitar la longitud del título
    },
  })
  titulo: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  descripcion?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  url_video?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  url_documento?: string;

  // Relación con Categorías (opcional)
  @ForeignKey(() => Categorias)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_categoria?: number;
}

export default Instructivo;
