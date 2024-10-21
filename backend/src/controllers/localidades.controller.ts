import { Request, Response } from "express";
import Localidades from "../models/localidades.models";

// Crear una nueva localidad
export const crearLocalidad = async (req: Request, res: Response) => {
  try {
    const localidad = await Localidades.create(req.body);
    res.status(201).json(localidad);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear localidad" });
  }
};

// Obtener todas las localidades
export const getLocalidades = async (req: Request, res: Response) => {
  try {
    const localidades = await Localidades.findAll();
    res.status(200).json(localidades);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener las localidades" });
  }
};

// Obtener una localidad por ID
export const getLocalidadId = async (req: Request, res: Response) => {
  try {
    const localidad = await Localidades.findByPk(req.params.id);
    res
      .status(localidad ? 200 : 404)
      .json(localidad || { message: "No se encuentra la localidad" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener la localidad" });
  }
};

// Actualizar una localidad
export const actualizarLocalidad = async (req: Request, res: Response) => {
  try {
    const localidad = await Localidades.findByPk(req.params.id);
    if (localidad) {
      await localidad.update(req.body);
      res.status(200).json(localidad);
    } else {
      res.status(404).json({ message: "No se encuentra la localidad" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar la localidad" });
  }
};

// Eliminar una localidad
export const eliminarLocalidad = async (req: Request, res: Response) => {
  try {
    const result = await Localidades.destroy({
      where: { id: req.params.id },
    });
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "No se encuentra la localidad" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar la localidad" });
  }
};
