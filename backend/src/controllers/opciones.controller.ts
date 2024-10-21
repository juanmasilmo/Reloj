import { Request, Response } from "express";
import Opciones from "../models/opciones.models";

// Crear una nueva opción
export const crearOpcion = async (req: Request, res: Response) => {
  try {
    const opcion = await Opciones.create(req.body);
    res.status(201).json(opcion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear opción" });
  }
};

// Obtener todas las opciones
export const getOpciones = async (req: Request, res: Response) => {
  try {
    const opciones = await Opciones.findAll();
    res.status(200).json(opciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las opciones" });
  }
};

// Obtener una opción por ID
export const getOpcionId = async (req: Request, res: Response) => {
  try {
    const opcion = await Opciones.findByPk(req.params.id);
    res
      .status(opcion ? 200 : 404)
      .json(opcion || { message: "No se encuentra la opción" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la opción" });
  }
};

// Actualizar una opción
export const actualizarOpcion = async (req: Request, res: Response) => {
  try {
    const opcion = await Opciones.findByPk(req.params.id);
    if (opcion) {
      await opcion.update(req.body);
      res.status(200).json(opcion);
    } else {
      res.status(404).json({ message: "No se encuentra la opción" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la opción" });
  }
};

// Eliminar una opción
export const eliminarOpcion = async (req: Request, res: Response) => {
  try {
    const result = await Opciones.destroy({
      where: { id: req.params.id },
    });
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "No se encuentra la opción" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la opción" });
  }
};
