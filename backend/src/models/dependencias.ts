import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Localidades } from './localidades'; // Asegúrate de que el modelo Localidades esté correctamente importado.

@Table({
  tableName: 'dependencias',
  schema: 'public',
  timestamps: false,
})
class Dependencias extends Model {
  @Column({
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(255), // Se define una longitud máxima
    allowNull: true,
  })
  descripcion: string;

  @ForeignKey(() => Localidades)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_localidad: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 1,
  })
  estado: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  padre: number;

  @Column({
    type: DataType.STRING(100), // Se define una longitud máxima
    allowNull: true,
  })
  usuario_abm: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id_leu: number;

  @Column({
    type: DataType.STRING(255), // Se define una longitud máxima
    allowNull: true,
  })
  direccion: string;
}

export default Dependencias;
