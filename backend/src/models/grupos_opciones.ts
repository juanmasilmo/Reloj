import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'grupos_opciones',
  schema: 'public',
  timestamps: false,
})
class GruposOpciones extends Model {
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
      model: 'opciones',
      key: 'id',
    },
  })
  id_opcion: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm?: string; // Uso de '?' para indicar que es opcional
}

export default GruposOpciones;
