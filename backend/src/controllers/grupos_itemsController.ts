import { Request, Response } from "express";
import GruposItems from "../models/grupos_items";

// Crear un GrupoItem
export const crearGrupoItem = async (req: Request, res: Response) => {
  try {
    const grupoItem = await GruposItems.create(req.body);
    res.status(201).json(grupoItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear GrupoItem" });
  }
};

// Obtener todos los GruposItems
export const getGruposItems = async (req: Request, res: Response) => {
  try {
    const gruposItems = await GruposItems.findAll();
    res.status(200).json(gruposItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los GruposItems" });
  }
};

// Obtener un GrupoItem por ID (combinación de id_grupo y id_item)
export const getGrupoItemById = async (req: Request, res: Response) => {
  try {
    const { id_grupo, id_item } = req.params;
    const grupoItem = await GruposItems.findOne({
      where: { id_grupo, id_item },
    });
    res
      .status(grupoItem ? 200 : 404)
      .json(
        grupoItem || {
          message: "No se encuentra el GrupoItem con los IDs proporcionados",
        }
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el GrupoItem" });
  }
};

// Actualizar un GrupoItem
export const actualizarGrupoItem = async (req: Request, res: Response) => {
  try {
    const { id_grupo, id_item } = req.params;
    const grupoItem = await GruposItems.findOne({
      where: { id_grupo, id_item },
    });
    if (grupoItem) {
      await grupoItem.update(req.body);
      res.status(200).json(grupoItem);
    } else {
      res.status(404).json({ message: "GrupoItem no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el GrupoItem" });
  }
};

// Eliminar un GrupoItem (hard delete)
export const eliminarGrupoItem = async (req: Request, res: Response) => {
  try {
    const { id_grupo, id_item } = req.params;
    const grupoItemEliminado = await GruposItems.destroy({
      where: { id_grupo, id_item },
    });
    if (grupoItemEliminado) {
      res.status(204).json({ message: "GrupoItem eliminado con éxito" });
    } else {
      res.status(404).json({ message: "GrupoItem no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el GrupoItem" });
  }
};
