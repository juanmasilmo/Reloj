import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'circunscripciones',
  schema: 'public',
  timestamps: false,
})
class Circunscripciones extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100), // Se define una longitud máxima
    allowNull: true, // Cambiar a false si se requiere
  })
  descripcion: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  codigo: number;
}

export default Circunscripciones;
