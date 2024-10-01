import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'opciones',
  schema: 'public',
  timestamps: false,
})
class Opciones extends Model {
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
  titulo?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  descripcion?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  icono?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  orden?: number; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  estado?: number; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm?: string; // Uso de '?' para indicar que es opcional
}

export default Opciones;
