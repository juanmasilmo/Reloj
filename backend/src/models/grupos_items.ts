import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'grupos_items',
  schema: 'public',
  timestamps: false,
})
class GruposItems extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'grupos',
      key: 'id',
    },
  })
  id_grupo: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'items',
      key: 'id',
    },
  })
  id_item: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm: string;
}

export default GruposItems;
