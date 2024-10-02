import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'categorias',
  schema: 'public',
  timestamps: false,
})
class Categorias extends Model {
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
  descripcion: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cod_categoria: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  descripcion_tipo_categoria: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_leu: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  estado: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  listar_reporte: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  presentismo: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  pasajes: number;
}

export default Categorias;