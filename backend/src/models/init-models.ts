import { Sequelize } from "sequelize-typescript";
import AgenteArticulo from "./agentes_articulos";
import Articulos from "./articulos";
import CalendarioAgente from "./calendario_agente";
import CalendarioAnual from "./calendario_anual";
import Categorias from "./categorias";
import Circunscripciones from "./circunscripciones";
import Dependencias from "./dependencias";
import Estados from "./estados";
import Grupos from "./grupos";
import GruposItems from "./grupos_items";
import GruposOpciones from "./grupos_opciones";
import Instructivo from "./instructivo";
import Items from "./items";
import Localidades from "./localidades";
import Opciones from "./opciones";
import Personas from "./personas";
import SistemaVersiones from "./sistema_versiones";
import UsuarioDependencias from "./usuario_dependencias";
import Usuarios from "./usuarios";

export function initModels(sequelize: Sequelize) {
  // Registra los modelos con sequelize
  sequelize.addModels([
    AgenteArticulo,
    Articulos,
    CalendarioAgente,
    CalendarioAnual,
    Categorias,
    Circunscripciones,
    Dependencias,
    Estados,
    Grupos,
    GruposItems,
    GruposOpciones,
    Instructivo,
    Items,
    Localidades,
    Opciones,
    Personas,
    SistemaVersiones,
    UsuarioDependencias,
    Usuarios,
  ]);

  // Definición de relaciones entre tablas
  Dependencias.belongsToMany(Usuarios, { as: 'id_usuario_usuarios', through: UsuarioDependencias, foreignKey: "id_dependencia", otherKey: "id_usuario" });
  Grupos.belongsToMany(Items, { as: 'id_item_items', through: GruposItems, foreignKey: "id_grupo", otherKey: "id_item" });
  Grupos.belongsToMany(Opciones, { as: 'id_opcion_opciones', through: GruposOpciones, foreignKey: "id_grupo", otherKey: "id_opcion" });
  Items.belongsToMany(Grupos, { as: 'id_grupo_grupos', through: GruposItems, foreignKey: "id_item", otherKey: "id_grupo" });
  Opciones.belongsToMany(Grupos, { as: 'id_grupo_grupos_grupos_opciones', through: GruposOpciones, foreignKey: "id_opcion", otherKey: "id_grupo" });
  Usuarios.belongsToMany(Dependencias, { as: 'id_dependencia_dependencia', through: UsuarioDependencias, foreignKey: "id_usuario", otherKey: "id_dependencia" });
  
  // Relaciones individuales
  Personas.belongsTo(Categorias, { as: "id_categoria_categoria", foreignKey: "id_categoria" });
  Categorias.hasMany(Personas, { as: "personas", foreignKey: "id_categoria" });
  
  Localidades.belongsTo(Circunscripciones, { as: "id_circunscripcion_circunscripcione", foreignKey: "id_circunscripcion" });
  Circunscripciones.hasMany(Localidades, { as: "localidades", foreignKey: "id_circunscripcion" });
  
  Personas.belongsTo(Dependencias, { as: "id_dependencia_dependencia", foreignKey: "id_dependencia" });
  Dependencias.hasMany(Personas, { as: "personas", foreignKey: "id_dependencia" });
  
  UsuarioDependencias.belongsTo(Dependencias, { as: "id_dependencia_dependencia", foreignKey: "id_dependencia" });
  Dependencias.hasMany(UsuarioDependencias, { as: "usuario_dependencia", foreignKey: "id_dependencia" });
  
  CalendarioAnual.belongsTo(Estados, { as: "id_estado_estado", foreignKey: "id_estado" });
  Estados.hasMany(CalendarioAnual, { as: "calendario_anuals", foreignKey: "id_estado" });
  
  GruposItems.belongsTo(Grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(GruposItems, { as: "grupos_items", foreignKey: "id_grupo" });
  
  GruposOpciones.belongsTo(Grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(GruposOpciones, { as: "grupos_opciones", foreignKey: "id_grupo" });
  
  Usuarios.belongsTo(Grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(Usuarios, { as: "usuarios", foreignKey: "id_grupo" });
  
  GruposItems.belongsTo(Items, { as: "id_item_item", foreignKey: "id_item" });
  Items.hasMany(GruposItems, { as: "grupos_items", foreignKey: "id_item" });
  
  Dependencias.belongsTo(Localidades, { as: "id_localidad_localidade", foreignKey: "id_localidad" });
  Localidades.hasMany(Dependencias, { as: "dependencia", foreignKey: "id_localidad" });
  
  GruposOpciones.belongsTo(Opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion" });
  Opciones.hasMany(GruposOpciones, { as: "grupos_opciones", foreignKey: "id_opcion" });
  
  Items.belongsTo(Opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion" });
  Opciones.hasMany(Items, { as: "items", foreignKey: "id_opcion" });
  
  UsuarioDependencias.belongsTo(Usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario" });
  Usuarios.hasMany(UsuarioDependencias, { as: "usuario_dependencia", foreignKey: "id_usuario" });

  return {
    AgenteArticulo,
    Articulos,
    CalendarioAgente,
    CalendarioAnual,
    Categorias,
    Circunscripciones,
    Dependencias,
    Estados,
    Grupos,
    GruposItems,
    GruposOpciones,
    Instructivo,
    Items,
    Localidades,
    Opciones,
    Personas,
    SistemaVersiones,
    UsuarioDependencias,
    Usuarios,
  };
}
