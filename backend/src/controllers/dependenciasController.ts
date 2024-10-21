import { Request, Response } from "express";
import Dependencias from "../models/dependencias";

// Crear una Dependencia
export const crearDependencia = async (req: Request, res: Response) => {
  try {
    const dependencia = await Dependencias.create(req.body);
    res.status(201).json(dependencia);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear dependencia" });
  }
};

// Obtener todas las Dependencias
export const getDependencias = async (req: Request, res: Response) => {
  try {
    const dependencias = await Dependencias.findAll();
    res.status(200).json(dependencias);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener las dependencias" });
  }
};

// Obtener una Dependencia por ID
export const getDependenciaById = async (req: Request, res: Response) => {
  try {
    const dependencia = await Dependencias.findByPk(req.params.id);
    res.status(dependencia ? 200 : 404).json(
      dependencia || {
        message: "No se encuentra la dependencia con el ID proporcionado",
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener la dependencia" });
  }
};

// Actualizar (Soft delete)
export const actualizarDependencia = async (req: Request, res: Response) => {
  try {
    const dependencia = await Dependencias.findByPk(req.params.id);
    if (dependencia) {
      await dependencia.update(req.body);
      res.status(200).json(dependencia);
    } else {
      res.status(404).json({ message: "Dependencia no encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar la dependencia" });
  }
};

// Eliminar Dependencia (hard delete)
export const eliminarDependencia = async (req: Request, res: Response) => {
  try {
    const dependenciaEliminada = await Dependencias.destroy({
      where: { id: req.params.id },
    });
    if (dependenciaEliminada) {
      res.status(204).json({ message: "Dependencia eliminada con éxito" });
    } else {
      res.status(404).json({ message: "Dependencia no encontrada" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar la dependencia" });
  }
};
