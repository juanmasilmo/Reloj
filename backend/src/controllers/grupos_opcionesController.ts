import { Request, Response } from "express";
import GruposOpciones from "../models/grupos_opciones";

// Crear un GrupoOpcion
export const crearGrupoOpcion = async (req: Request, res: Response) => {
  try {
    const grupoOpcion = await GruposOpciones.create(req.body);
    res.status(201).json(grupoOpcion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear GrupoOpcion" });
  }
};

// Obtener todos los GruposOpciones
export const getGruposOpciones = async (req: Request, res: Response) => {
  try {
    const gruposOpciones = await GruposOpciones.findAll();
    res.status(200).json(gruposOpciones);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los GruposOpciones" });
  }
};

// Obtener un GrupoOpcion por ID (combinación de id_grupo y id_opcion)
export const getGrupoOpcionById = async (req: Request, res: Response) => {
  try {
    const { id_grupo, id_opcion } = req.params;
    const grupoOpcion = await GruposOpciones.findOne({
      where: { id_grupo, id_opcion },
    });
    res
      .status(grupoOpcion ? 200 : 404)
      .json(
        grupoOpcion || {
          message: "No se encuentra el GrupoOpcion con los IDs proporcionados",
        }
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el GrupoOpcion" });
  }
};

// Actualizar un GrupoOpcion
export const actualizarGrupoOpcion = async (req: Request, res: Response) => {
  try {
    const { id_grupo, id_opcion } = req.params;
    const grupoOpcion = await GruposOpciones.findOne({
      where: { id_grupo, id_opcion },
    });
    if (grupoOpcion) {
      await grupoOpcion.update(req.body);
      res.status(200).json(grupoOpcion);
    } else {
      res.status(404).json({ message: "GrupoOpcion no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el GrupoOpcion" });
  }
};

// Eliminar un GrupoOpcion (hard delete)
export const eliminarGrupoOpcion = async (req: Request, res: Response) => {
  try {
    const { id_grupo, id_opcion } = req.params;
    const grupoOpcionEliminado = await GruposOpciones.destroy({
      where: { id_grupo, id_opcion },
    });
    if (grupoOpcionEliminado) {
      res.status(204).json({ message: "GrupoOpcion eliminado con éxito" });
    } else {
      res.status(404).json({ message: "GrupoOpcion no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el GrupoOpcion" });
  }
};
