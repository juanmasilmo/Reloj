import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";

@Table({
  tableName: "grupos_items",
  schema: "public",
  timestamps: false,
})
class GruposItems extends Model {
  @ForeignKey(() => "grupos") // Asegúrate de que el modelo grupos esté correctamente importado
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: "grupos",
      key: "id",
    },
  })
  id_grupo: number;

  @ForeignKey(() => "items") // Asegúrate de que el modelo items esté correctamente importado
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: "items",
      key: "id",
    },
  })
  id_item: number;

  @Column({
    type: DataType.STRING(100), // Longitud máxima recomendada
    allowNull: true,
  })
  usuario_abm: string;
}

export default GruposItems;
