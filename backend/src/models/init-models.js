var DataTypes = require("sequelize").DataTypes;
var _agentes_articulos = require("./agentes_articulos");
var _articulos = require("./articulos");
var _calendario_agente = require("./calendario_agente");
var _calendario_anual = require("./calendario_anual");
var _categorias = require("./categorias");
var _circunscripciones = require("./circunscripciones");
var _dependencias = require("./dependencias");
var _estados = require("./estados");
var _grupos = require("./grupos");
var _grupos_items = require("./grupos_items");
var _grupos_opciones = require("./grupos_opciones");
var _instructivo = require("./instructivo");
var _items = require("./items");
var _localidades = require("./localidades");
var _opciones = require("./opciones");
var _personas = require("./personas");
var _sistema_versiones = require("./sistema_versiones");
var _usuario_dependencias = require("./usuario_dependencias");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var agentes_articulos = _agentes_articulos(sequelize, DataTypes);
  var articulos = _articulos(sequelize, DataTypes);
  var calendario_agente = _calendario_agente(sequelize, DataTypes);
  var calendario_anual = _calendario_anual(sequelize, DataTypes);
  var categorias = _categorias(sequelize, DataTypes);
  var circunscripciones = _circunscripciones(sequelize, DataTypes);
  var dependencias = _dependencias(sequelize, DataTypes);
  var estados = _estados(sequelize, DataTypes);
  var grupos = _grupos(sequelize, DataTypes);
  var grupos_items = _grupos_items(sequelize, DataTypes);
  var grupos_opciones = _grupos_opciones(sequelize, DataTypes);
  var instructivo = _instructivo(sequelize, DataTypes);
  var items = _items(sequelize, DataTypes);
  var localidades = _localidades(sequelize, DataTypes);
  var opciones = _opciones(sequelize, DataTypes);
  var personas = _personas(sequelize, DataTypes);
  var sistema_versiones = _sistema_versiones(sequelize, DataTypes);
  var usuario_dependencias = _usuario_dependencias(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  dependencias.belongsToMany(usuarios, { as: 'id_usuario_usuarios', through: usuario_dependencias, foreignKey: "id_dependencia", otherKey: "id_usuario" });
  grupos.belongsToMany(items, { as: 'id_item_items', through: grupos_items, foreignKey: "id_grupo", otherKey: "id_item" });
  grupos.belongsToMany(opciones, { as: 'id_opcion_opciones', through: grupos_opciones, foreignKey: "id_grupo", otherKey: "id_opcion" });
  items.belongsToMany(grupos, { as: 'id_grupo_grupos', through: grupos_items, foreignKey: "id_item", otherKey: "id_grupo" });
  opciones.belongsToMany(grupos, { as: 'id_grupo_grupos_grupos_opciones', through: grupos_opciones, foreignKey: "id_opcion", otherKey: "id_grupo" });
  usuarios.belongsToMany(dependencias, { as: 'id_dependencia_dependencia', through: usuario_dependencias, foreignKey: "id_usuario", otherKey: "id_dependencia" });
  personas.belongsTo(categorias, { as: "id_categoria_categoria", foreignKey: "id_categoria"});
  categorias.hasMany(personas, { as: "personas", foreignKey: "id_categoria"});
  localidades.belongsTo(circunscripciones, { as: "id_circunscripcion_circunscripcione", foreignKey: "id_circunscripcion"});
  circunscripciones.hasMany(localidades, { as: "localidades", foreignKey: "id_circunscripcion"});
  personas.belongsTo(dependencias, { as: "id_dependencia_dependencia", foreignKey: "id_dependencia"});
  dependencias.hasMany(personas, { as: "personas", foreignKey: "id_dependencia"});
  usuario_dependencias.belongsTo(dependencias, { as: "id_dependencia_dependencia", foreignKey: "id_dependencia"});
  dependencias.hasMany(usuario_dependencias, { as: "usuario_dependencia", foreignKey: "id_dependencia"});
  calendario_anual.belongsTo(estados, { as: "id_estado_estado", foreignKey: "id_estado"});
  estados.hasMany(calendario_anual, { as: "calendario_anuals", foreignKey: "id_estado"});
  grupos_items.belongsTo(grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo"});
  grupos.hasMany(grupos_items, { as: "grupos_items", foreignKey: "id_grupo"});
  grupos_opciones.belongsTo(grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo"});
  grupos.hasMany(grupos_opciones, { as: "grupos_opciones", foreignKey: "id_grupo"});
  usuarios.belongsTo(grupos, { as: "id_grupo_grupo", foreignKey: "id_grupo"});
  grupos.hasMany(usuarios, { as: "usuarios", foreignKey: "id_grupo"});
  grupos_items.belongsTo(items, { as: "id_item_item", foreignKey: "id_item"});
  items.hasMany(grupos_items, { as: "grupos_items", foreignKey: "id_item"});
  dependencias.belongsTo(localidades, { as: "id_localidad_localidade", foreignKey: "id_localidad"});
  localidades.hasMany(dependencias, { as: "dependencia", foreignKey: "id_localidad"});
  grupos_opciones.belongsTo(opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion"});
  opciones.hasMany(grupos_opciones, { as: "grupos_opciones", foreignKey: "id_opcion"});
  items.belongsTo(opciones, { as: "id_opcion_opcione", foreignKey: "id_opcion"});
  opciones.hasMany(items, { as: "items", foreignKey: "id_opcion"});
  usuario_dependencias.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(usuario_dependencias, { as: "usuario_dependencia", foreignKey: "id_usuario"});

  return {
    agentes_articulos,
    articulos,
    calendario_agente,
    calendario_anual,
    categorias,
    circunscripciones,
    dependencias,
    estados,
    grupos,
    grupos_items,
    grupos_opciones,
    instructivo,
    items,
    localidades,
    opciones,
    personas,
    sistema_versiones,
    usuario_dependencias,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
