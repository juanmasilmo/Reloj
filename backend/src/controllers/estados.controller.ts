import { Request, Response } from "express";
import Estados from "../models/estados.models";

// Crear un Estado
export const crearEstado = async (req: Request, res: Response) => {
  try {
    const estado = await Estados.create(req.body);
    res.status(201).json(estado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear estado" });
  }
};

// Obtener todos los Estados
export const getEstados = async (req: Request, res: Response) => {
  try {
    const estados = await Estados.findAll();
    res.status(200).json(estados);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los estados" });
  }
};

// Obtener un Estado por ID
export const getEstadoById = async (req: Request, res: Response) => {
  try {
    const estado = await Estados.findByPk(req.params.id);
    res
      .status(estado ? 200 : 404)
      .json(
        estado || {
          message: "No se encuentra el estado con el ID proporcionado",
        }
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el estado" });
  }
};

// Actualizar un Estado
export const actualizarEstado = async (req: Request, res: Response) => {
  try {
    const estado = await Estados.findByPk(req.params.id);
    if (estado) {
      await estado.update(req.body);
      res.status(200).json(estado);
    } else {
      res.status(404).json({ message: "Estado no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el estado" });
  }
};

// Eliminar un Estado
export const eliminarEstado = async (req: Request, res: Response) => {
  try {
    const estadoEliminado = await Estados.destroy({
      where: { id: req.params.id },
    });
    if (estadoEliminado) {
      res.status(204).json({ message: "Estado eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Estado no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el estado" });
  }
};
