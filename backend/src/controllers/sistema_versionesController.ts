import { Request, Response } from "express";
import SistemaVersiones from "../models/sistema_versiones";

// Crear una nueva versión del sistema
export const crearSistemaVersion = async (req: Request, res: Response) => {
  try {
    const version = await SistemaVersiones.create(req.body);
    res.status(201).json(version);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la versión del sistema" });
  }
};

// Obtener todas las versiones del sistema
export const getSistemaVersiones = async (req: Request, res: Response) => {
  try {
    const versiones = await SistemaVersiones.findAll();
    res.status(200).json(versiones);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las versiones del sistema" });
  }
};

// Obtener una versión del sistema por ID
export const getSistemaVersionId = async (req: Request, res: Response) => {
  try {
    const version = await SistemaVersiones.findByPk(req.params.id);
    res
      .status(version ? 200 : 404)
      .json(version || { message: "No se encuentra la versión del sistema" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener la versión del sistema" });
  }
};

// Actualizar una versión del sistema
export const actualizarSistemaVersion = async (req: Request, res: Response) => {
  try {
    const version = await SistemaVersiones.findByPk(req.params.id);
    if (version) {
      await version.update(req.body);
      res.status(200).json(version);
    } else {
      res
        .status(404)
        .json({ message: "No se encuentra la versión del sistema" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al actualizar la versión del sistema" });
  }
};

// Eliminar una versión del sistema
export const eliminarSistemaVersion = async (req: Request, res: Response) => {
  try {
    const result = await SistemaVersiones.destroy({
      where: { id: req.params.id },
    });
    if (result) {
      res.status(204).send();
    } else {
      res
        .status(404)
        .json({ message: "No se encuentra la versión del sistema" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al eliminar la versión del sistema" });
  }
};
