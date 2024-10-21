import { Table, Column, Model, DataType, Default } from "sequelize-typescript";

@Table({
  tableName: "articulos",
  schema: "public",
  timestamps: false,
  indexes: [
    {
      name: "articulos_pkey", // Si este índice es redundante, podrías eliminarlo
      unique: true,
      fields: ["id"],
    },
  ],
})
class Articulos extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_leu: number;

  @Column({
    type: DataType.STRING(50), // Definir longitud máxima si es posible
    allowNull: false,
  })
  nro_articulo: string;

  @Column({
    type: DataType.STRING(10), // Definir longitud máxima si es posible
    allowNull: true,
  })
  inciso: string;

  @Column({
    type: DataType.STRING(255), // Definir longitud máxima si es posible
    allowNull: false,
  })
  descripcion: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cantidad_mensual: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cantidad_anual: number;

  @Column({
    type: DataType.STRING(255), // Definir longitud máxima si es posible
    allowNull: true,
  })
  observacion: string;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  inasistencias: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  licencias: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  retiro: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tardanza: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  excluye_feria: number;

  @Column({
    type: DataType.STRING(50), // Definir longitud máxima si es posible
    allowNull: true,
  })
  tipo_licencias: string;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sin_fecha_fin: number;

  @Default(1)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  estado: number;

  @Default(1)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cobra_presentismo: number;

  @Column({
    type: DataType.STRING(255), // Definir longitud máxima si es posible
    allowNull: true,
  })
  usuario_abm: string;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: "0 - sincroniza leu 1 - carga manual",
  })
  c_manual: number;

  @Default(1)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    comment: "-- 0 No descuenta -- 1 descuenta pasajes",
  })
  desc_pasajes: number;

  @Column({
    type: DataType.STRING(50), // Definir longitud máxima si es posible
    allowNull: true,
  })
  color: string;
}

export default Articulos;
