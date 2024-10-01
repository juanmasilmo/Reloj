import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';

@Table({
  tableName: 'items',
  schema: 'public',
  timestamps: false,
})
class Items extends Model {
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
  descripcion?: string; // Uso de '?' para indicar que es opcional

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  enlace?: string; // Uso de '?' para indicar que es opcional

  @ForeignKey(() => Opciones) // Definición de la clave foránea
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_opcion?: number; // Uso de '?' para indicar que es opcional

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

export default Items;
