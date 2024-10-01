import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'usuario_dependencias',
  schema: 'public',
  timestamps: false,
})
class UsuarioDependencias extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'usuarios',
      key: 'id',
    },
  })
  id_usuario: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'dependencias',
      key: 'id',
    },
  })
  id_dependencia: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm?: string; // Uso de '?' para indicar que es opcional
}

export default UsuarioDependencias;
