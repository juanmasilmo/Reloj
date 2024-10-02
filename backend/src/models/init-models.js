import { Sequelize, DataTypes } from 'sequelize';
import AgentesArticulos from './agentes_articulos';
import Articulos from './articulos';
import CalendarioAgente from './calendario_agente';
import CalendarioAnual from './calendario_anual';
import Categorias from './categorias';
import Circunscripciones from './circunscripciones';
import Dependencias from './dependencias';
import Estados from './estados';
import Grupos from './grupos';
import GruposItems from './grupos_items';
import GruposOpciones from './grupos_opciones';
import Instructivo from './instructivo';
import Items from './items';
import Localidades from './localidades';
import Opciones from './opciones';
import Personas from './personas';
import SistemaVersiones from './sistema_versiones';
import UsuarioDependencias from './usuario_dependencias';
import Usuarios from './usuarios';

export function initModels(sequelize: Sequelize) {
  const agentesArticulos = AgentesArticulos(sequelize, DataTypes);
  const articulos = Articulos(sequelize, DataTypes);
  const calendarioAgente = CalendarioAgente(sequelize, DataTypes);
  const calendarioAnual = CalendarioAnual(sequelize, DataTypes);
  const categorias = Categorias(sequelize, DataTypes);
  const circunscripciones = Circunscripciones(sequelize, DataTypes);
  const dependencias = Dependencias(sequelize, DataTypes);
  const estados = Estados(sequelize, DataTypes);
  const grupos = Grupos(sequelize, DataTypes);
  const gruposItems = GruposItems(sequelize, DataTypes);
  const gruposOpciones = GruposOpciones(sequelize, DataTypes);
  const instructivo = Instructivo(sequelize, DataTypes);
  const items = Items(sequelize, DataTypes);
  const localidades = Localidades(sequelize, DataTypes);
  const opciones = Opciones(sequelize, DataTypes);
  const personas = Personas(sequelize, DataTypes);
  const sistemaVersiones = SistemaVersiones(sequelize, DataTypes);
  const usuarioDependencias = UsuarioDependencias(sequelize, DataTypes);
  const usuarios = Usuarios(sequelize, DataTypes);

  // Relaciones
  dependencias.belongsToMany(usuarios, { as: 'id_usuario_usuarios', through: usuarioDependencias, foreignKey: "id_dependencia", otherKey: "id_usuario" });
  grupos.belongsToMany(items, { as: 'id_item_items', through: gruposItems, foreignKey: "id_grupo", otherKey: "id_item" });
  grupos.belongsToMany(opciones, { as: 'id_opcion_opciones', through: gruposOpciones, foreignKey: "id_grupo", otherKey: "id_opcion" });
  items.belongsToMany(grupos, { as: 'id_grupo_grupos', through: gruposItems, foreignKey: "id_item", otherKey: "id_grupo" });
  opciones.belongsToMany(grupos, { as: 'id_grupo_grupos_grupos_opciones', through: gruposOpciones, foreignKey: "id_opcion", otherKey: "id_grupo" });
  usuarios.belongsToMany(dependencias, { as: 'id_dependencia_dependencia', through: usuarioDependencias, foreignKey: "id_usuario", otherKey: "id_dependencia" });
  personas.belongsTo(categorias, { as: "id_categoria_categoria", foreignKey: "id_categoria" });
  categorias.hasMany(personas, { as: "personas", foreignKey: "id_categoria" });
  localidades.belongsTo(circunscripciones, { as: "id_circunscripcion_circunscripcione", foreignKey: "id_circunscripcion" });
  circunscripciones.hasMany(localidades, { as: "localidades", foreignKey: "id_circunscripcion" });
  personas.belongsTo(dependencias, { as: "id_dependencia_dependencia", foreignKey: "id_dependencia" });
  dependencias.hasMany(personas, { as: "personas", foreignKey: "id_dependencia" });
  usuarioDependencias.belongsTo(dependencias, { as: "id_dependencia_dependencia", foreignKey: "id_dependencia" });
  dependencias.hasMany(usuarioDependencias, { as: "usuario_dependencia", foreignKey: "id_dependencia" });
  calendarioAnual.belongsTo(estados, { as: "id_estado_estado", foreignKey: "id_estado" });
  estados.hasMany(calendarioAnual, { as: "calendario_anuals", foreignKey: "id_estado" });
  gruposItems.belongsTo(grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo" });
  grupos.hasMany(gruposItems, { as: "grupos_items", foreignKey: "id_grupo" });
  gruposOpciones.belongsTo(grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo" });
  grupos.hasMany(gruposOpciones, { as: "grupos_opciones", foreignKey: "id_grupo" });
  usuarios.belongsTo(grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo" });
  grupos.hasMany(usuarios, { as: "usuarios", foreignKey: "id_grupo" });
  gruposItems.belongsTo(items, { as: "id_item_item", foreignKey: "id_item" });
  items.hasMany(gruposItems, { as: "grupos_items", foreignKey: "id_item" });
  dependencias.belongsTo(localidades, { as: "id_localidad_localidade", foreignKey: "id_localidad" });
  localidades.hasMany(dependencias, { as: "dependencia", foreignKey: "id_localidad" });
  gruposOpciones.belongsTo(opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion" });
  opciones.hasMany(gruposOpciones, { as: "grupos_opciones", foreignKey: "id_opcion" });
  items.belongsTo(opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion" });
  opciones.hasMany(items, { as: "items", foreignKey: "id_opcion" });
  usuarioDependencias.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario" });
  usuarios.hasMany(usuarioDependencias, { as: "usuario_dependencia", foreignKey: "id_usuario" });

  return {
    agentesArticulos,
    articulos,
    calendarioAgente,
    calendarioAnual,
    categorias,
    circunscripciones,
    dependencias,
    estados,
    grupos,
    gruposItems,
    gruposOpciones,
    instructivo,
    items,
    localidades,
    opciones,
    personas,
    sistemaVersiones,
    usuarioDependencias,
    usuarios,
  };
}

export default initModels;
