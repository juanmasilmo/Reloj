import { Request, Response } from "express";
import Personas from "../models/personas.models";

// Crear una nueva persona
export const crearPersona = async (req: Request, res: Response) => {
  try {
    const persona = await Personas.create(req.body);
    res.status(201).json(persona);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear persona" });
  }
};

// Obtener todas las personas
export const getPersonas = async (req: Request, res: Response) => {
  try {
    const personas = await Personas.findAll();
    res.status(200).json(personas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las personas" });
  }
};

// Obtener una persona por ID
export const getPersonaId = async (req: Request, res: Response) => {
  try {
    const persona = await Personas.findByPk(req.params.id);
    res
      .status(persona ? 200 : 404)
      .json(persona || { message: "No se encuentra la persona" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la persona" });
  }
};

// Actualizar una persona
export const actualizarPersona = async (req: Request, res: Response) => {
  try {
    const persona = await Personas.findByPk(req.params.id);
    if (persona) {
      await persona.update(req.body);
      res.status(200).json(persona);
    } else {
      res.status(404).json({ message: "No se encuentra la persona" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la persona" });
  }
};

// Eliminar una persona
export const eliminarPersona = async (req: Request, res: Response) => {
  try {
    const result = await Personas.destroy({
      where: { id: req.params.id },
    });
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "No se encuentra la persona" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la persona" });
  }
};
