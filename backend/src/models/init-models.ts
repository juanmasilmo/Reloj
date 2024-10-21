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
  // Relaciones many-to-many
  Dependencias.belongsToMany(Usuarios, { as: 'Usuarios', through: UsuarioDependencias, foreignKey: "id_dependencia", otherKey: "id_usuario" });
  Grupos.belongsToMany(Items, { as: 'Items', through: GruposItems, foreignKey: "id_grupo", otherKey: "id_item" });
  Grupos.belongsToMany(Opciones, { as: 'Opciones', through: GruposOpciones, foreignKey: "id_grupo", otherKey: "id_opcion" });
  Items.belongsToMany(Grupos, { as: 'Grupos', through: GruposItems, foreignKey: "id_item", otherKey: "id_grupo" });
  Opciones.belongsToMany(Grupos, { as: 'Grupos', through: GruposOpciones, foreignKey: "id_opcion", otherKey: "id_grupo" });
  Usuarios.belongsToMany(Dependencias, { as: 'Dependencias', through: UsuarioDependencias, foreignKey: "id_usuario", otherKey: "id_dependencia" });

  // Relaciones individuales
  Personas.belongsTo(Categorias, { as: "Categoria", foreignKey: "id_categoria" });
  Categorias.hasMany(Personas, { as: "Personas", foreignKey: "id_categoria" });
  
  Localidades.belongsTo(Circunscripciones, { as: "Circunscripcion", foreignKey: "id_circunscripcion" });
  Circunscripciones.hasMany(Localidades, { as: "Localidades", foreignKey: "id_circunscripcion" });
  
  Personas.belongsTo(Dependencias, { as: "Dependencia", foreignKey: "id_dependencia" });
  Dependencias.hasMany(Personas, { as: "Personas", foreignKey: "id_dependencia" });
  
  UsuarioDependencias.belongsTo(Dependencias, { as: "Dependencia", foreignKey: "id_dependencia" });
  Dependencias.hasMany(UsuarioDependencias, { as: "UsuarioDependencias", foreignKey: "id_dependencia" });
  
  CalendarioAnual.belongsTo(Estados, { as: "Estado", foreignKey: "id_estado" });
  Estados.hasMany(CalendarioAnual, { as: "CalendarioAnuales", foreignKey: "id_estado" });
  
  GruposItems.belongsTo(Grupos, { as: "Grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(GruposItems, { as: "GruposItems", foreignKey: "id_grupo" });
  
  GruposOpciones.belongsTo(Grupos, { as: "Grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(GruposOpciones, { as: "GruposOpciones", foreignKey: "id_grupo" });
  
  Usuarios.belongsTo(Grupos, { as: "Grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(Usuarios, { as: "Usuarios", foreignKey: "id_grupo" });
  
  GruposItems.belongsTo(Items, { as: "Item", foreignKey: "id_item" });
  Items.hasMany(GruposItems, { as: "GruposItems", foreignKey: "id_item" });
  
  Dependencias.belongsTo(Localidades, { as: "Localidad", foreignKey: "id_localidad" });
  Localidades.hasMany(Dependencias, { as: "Dependencias", foreignKey: "id_localidad" });
  
  GruposOpciones.belongsTo(Opciones, { as: "Opcion", foreignKey: "id_opcion" });
  Opciones.hasMany(GruposOpciones, { as: "GruposOpciones", foreignKey: "id_opcion" });
  
  Items.belongsTo(Opciones, { as: "Opcion", foreignKey: "id_opcion" });
  Opciones.hasMany(Items, { as: "Items", foreignKey: "id_opcion" });
  
  UsuarioDependencias.belongsTo(Usuarios, { as: "Usuario", foreignKey: "id_usuario" });
  Usuarios.hasMany(UsuarioDependencias, { as: "UsuarioDependencias", foreignKey: "id_usuario" });

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
