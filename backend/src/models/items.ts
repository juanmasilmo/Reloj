import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Opciones from './opciones';

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
    validate: {
      len: [0, 255], // Limita la longitud de la descripción
    },
  })
  descripcion?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  enlace?: string;

  @ForeignKey(() => Opciones)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_opcion?: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  orden?: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  estado?: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm?: string;

  // Relación con Opciones
  @BelongsTo(() => Opciones, {
    foreignKey: 'id_opcion',
    as: 'opcion',
  })
  opcion?: Opciones;
}

export default Items;
