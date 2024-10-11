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
    type: DataType.STRING(255), // Longitud máxima recomendada
    allowNull: true, // Cambiar a false si es obligatorio
  })
  descripcion: string;

  @Column({
    type: DataType.STRING(10), // Longitud máxima recomendada para una letra
    allowNull: true, // Cambiar a false si es obligatorio
  })
  letra: string;

  @Column({
    type: DataType.STRING(7), // Longitud máxima recomendada para un color (ej. #FFFFFF)
    allowNull: true, // Cambiar a false si es obligatorio
  })
  color: string;

  @Column({
    type: DataType.STRING(100), // Longitud máxima recomendada
    allowNull: true, // Cambiar a false si es obligatorio
  })
  usuario_abm: string;
}

export default Estados;
