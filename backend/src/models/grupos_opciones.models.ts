import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";

@Table({
  tableName: "grupos_opciones",
  schema: "public",
  timestamps: false,
})
class GruposOpciones extends Model {
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

  @ForeignKey(() => "opciones") // Asegúrate de que el modelo opciones esté correctamente importado
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: "opciones",
      key: "id",
    },
  })
  id_opcion: number;

  @Column({
    type: DataType.STRING(100), // Longitud máxima recomendada
    allowNull: true,
  })
  usuario_abm?: string; // Uso de '?' para indicar que es opcional
}

export default GruposOpciones;
