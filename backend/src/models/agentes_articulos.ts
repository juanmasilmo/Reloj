import { Table, Column, Model, DataType, Default, ForeignKey } from 'sequelize-typescript';

@Table({
  tableName: 'agentes_articulos',
  schema: 'public',
  timestamps: false,
})
class AgenteArticulo extends Model {

  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Licencia)  // Relación con la tabla 'Licencia'
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_licencia: number;

  @ForeignKey(() => AgenteLeu)  // Relación con la tabla 'AgenteLeu'
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_agente_leu: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_desde: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_hasta: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_articulo_leu: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  estado: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cant_dias: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  fecha_abm: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  usuario_abm: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_articulo_reloj: number;
}

export default AgenteArticulo;
