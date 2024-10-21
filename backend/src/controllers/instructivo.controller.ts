import { Request, Response } from "express";
import Instructivo from "../models/instructivo.models";

// Crear un Instructivo
export const crearInstructivo = async (req: Request, res: Response) => {
  try {
    const instructivo = await Instructivo.create(req.body);
    res.status(201).json(instructivo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el instructivo" });
  }
};

// Obtener todos los Instructivos
export const getInstructivos = async (req: Request, res: Response) => {
  try {
    const instructivos = await Instructivo.findAll();
    res.status(200).json(instructivos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los instructivos" });
  }
};

// Obtener un Instructivo por ID
export const getInstructivoById = async (req: Request, res: Response) => {
  try {
    const instructivo = await Instructivo.findByPk(req.params.id);
    res
      .status(instructivo ? 200 : 404)
      .json(instructivo || { message: "Instructivo no encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el instructivo" });
  }
};

// Actualizar un Instructivo
export const actualizarInstructivo = async (req: Request, res: Response) => {
  try {
    const instructivo = await Instructivo.findByPk(req.params.id);
    if (instructivo) {
      await instructivo.update(req.body);
      res.status(200).json(instructivo);
    } else {
      res.status(404).json({ message: "Instructivo no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el instructivo" });
  }
};

// Eliminar un Instructivo
export const eliminarInstructivo = async (req: Request, res: Response) => {
  try {
    const instructivoEliminado = await Instructivo.destroy({
      where: { id: req.params.id },
    });
    if (instructivoEliminado) {
      res.status(204).json({ message: "Instructivo eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Instructivo no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el instructivo" });
  }
};
