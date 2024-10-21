import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "agentes_articulos",
  schema: "public",
  timestamps: false,
})
class AgenteArticulo extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;

  // Campo id_licencia sin referencia a otra tabla, ya que viene por JSON
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_licencia: number;

  // Campo id_agente_leu sin referencia a otra tabla, ya que viene por JSON
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
    type: DataType.STRING(255), // Puedes ajustar la longitud según lo que necesites
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
    type: DataType.STRING(255), // Puedes ajustar la longitud según lo que necesites
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
