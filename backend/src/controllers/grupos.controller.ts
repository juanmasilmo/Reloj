import { Request, Response } from "express";
import Grupos from "../models/grupos.models";

// Crear un Grupo
export const crearGrupo = async (req: Request, res: Response) => {
  try {
    const grupo = await Grupos.create(req.body);
    res.status(201).json(grupo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el grupo" });
  }
};

// Obtener todos los Grupos
export const getGrupos = async (req: Request, res: Response) => {
  try {
    const grupos = await Grupos.findAll();
    res.status(200).json(grupos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los grupos" });
  }
};

// Obtener un Grupo por ID
export const getGrupoById = async (req: Request, res: Response) => {
  try {
    const grupo = await Grupos.findByPk(req.params.id);
    res
      .status(grupo ? 200 : 404)
      .json(
        grupo || { message: "No se encuentra el grupo con el ID proporcionado" }
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el grupo" });
  }
};

// Actualizar un Grupo
export const actualizarGrupo = async (req: Request, res: Response) => {
  try {
    const grupo = await Grupos.findByPk(req.params.id);
    if (grupo) {
      await grupo.update(req.body);
      res.status(200).json(grupo);
    } else {
      res.status(404).json({ message: "Grupo no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el grupo" });
  }
};

// Eliminar un Grupo (hard delete)
export const eliminarGrupo = async (req: Request, res: Response) => {
  try {
    const grupoEliminado = await Grupos.destroy({
      where: { id: req.params.id },
    });
    if (grupoEliminado) {
      res.status(204).json({ message: "Grupo eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Grupo no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el grupo" });
  }
};
