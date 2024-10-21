import { Sequelize } from "sequelize-typescript";
import AgenteArticulo from "./agentes_articulos.models";
import Articulos from "./articulos.models";
import CalendarioAgente from "./calendario_agente.models";
import CalendarioAnual from "./calendario_anual.models";
import Categorias from "./categorias.models";
import Circunscripciones from "./circunscripciones.models";
import Dependencias from "./dependencias.models";
import Estados from "./estados.models";
import Grupos from "./grupos.models";
import GruposItems from "./grupos_items.models";
import GruposOpciones from "./grupos_opciones.models";
import Instructivo from "./instructivo.models";
import Items from "./items.models";
import Localidades from "./localidades.models";
import Opciones from "./opciones.models";
import Personas from "./personas.models";
import SistemaVersiones from "./sistema_versiones.models";
import UsuarioDependencias from "./usuario_dependencias.models";
import Usuarios from "./usuarios.models";

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
  Dependencias.belongsToMany(Usuarios, {
    as: "Usuarios",
    through: UsuarioDependencias,
    foreignKey: "id_dependencia",
    otherKey: "id_usuario",
  });
  Grupos.belongsToMany(Items, {
    as: "Items",
    through: GruposItems,
    foreignKey: "id_grupo",
    otherKey: "id_item",
  });
  Grupos.belongsToMany(Opciones, {
    as: "Opciones",
    through: GruposOpciones,
    foreignKey: "id_grupo",
    otherKey: "id_opcion",
  });
  Items.belongsToMany(Grupos, {
    as: "Grupos",
    through: GruposItems,
    foreignKey: "id_item",
    otherKey: "id_grupo",
  });
  Opciones.belongsToMany(Grupos, {
    as: "Grupos",
    through: GruposOpciones,
    foreignKey: "id_opcion",
    otherKey: "id_grupo",
  });
  Usuarios.belongsToMany(Dependencias, {
    as: "Dependencias",
    through: UsuarioDependencias,
    foreignKey: "id_usuario",
    otherKey: "id_dependencia",
  });

  // Relaciones individuales
  Personas.belongsTo(Categorias, {
    as: "Categoria",
    foreignKey: "id_categoria",
  });
  Categorias.hasMany(Personas, { as: "Personas", foreignKey: "id_categoria" });

  Localidades.belongsTo(Circunscripciones, {
    as: "Circunscripcion",
    foreignKey: "id_circunscripcion",
  });
  Circunscripciones.hasMany(Localidades, {
    as: "Localidades",
    foreignKey: "id_circunscripcion",
  });

  Personas.belongsTo(Dependencias, {
    as: "Dependencia",
    foreignKey: "id_dependencia",
  });
  Dependencias.hasMany(Personas, {
    as: "Personas",
    foreignKey: "id_dependencia",
  });

  UsuarioDependencias.belongsTo(Dependencias, {
    as: "Dependencia",
    foreignKey: "id_dependencia",
  });
  Dependencias.hasMany(UsuarioDependencias, {
    as: "UsuarioDependencias",
    foreignKey: "id_dependencia",
  });

  CalendarioAnual.belongsTo(Estados, { as: "Estado", foreignKey: "id_estado" });
  Estados.hasMany(CalendarioAnual, {
    as: "CalendarioAnuales",
    foreignKey: "id_estado",
  });

  GruposItems.belongsTo(Grupos, { as: "Grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(GruposItems, { as: "GruposItems", foreignKey: "id_grupo" });

  GruposOpciones.belongsTo(Grupos, { as: "Grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(GruposOpciones, {
    as: "GruposOpciones",
    foreignKey: "id_grupo",
  });

  Usuarios.belongsTo(Grupos, { as: "Grupo", foreignKey: "id_grupo" });
  Grupos.hasMany(Usuarios, { as: "Usuarios", foreignKey: "id_grupo" });

  GruposItems.belongsTo(Items, { as: "Item", foreignKey: "id_item" });
  Items.hasMany(GruposItems, { as: "GruposItems", foreignKey: "id_item" });

  Dependencias.belongsTo(Localidades, {
    as: "Localidad",
    foreignKey: "id_localidad",
  });
  Localidades.hasMany(Dependencias, {
    as: "Dependencias",
    foreignKey: "id_localidad",
  });

  GruposOpciones.belongsTo(Opciones, { as: "Opcion", foreignKey: "id_opcion" });
  Opciones.hasMany(GruposOpciones, {
    as: "GruposOpciones",
    foreignKey: "id_opcion",
  });

  Items.belongsTo(Opciones, { as: "Opcion", foreignKey: "id_opcion" });
  Opciones.hasMany(Items, { as: "Items", foreignKey: "id_opcion" });

  UsuarioDependencias.belongsTo(Usuarios, {
    as: "Usuario",
    foreignKey: "id_usuario",
  });
  Usuarios.hasMany(UsuarioDependencias, {
    as: "UsuarioDependencias",
    foreignKey: "id_usuario",
  });

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
