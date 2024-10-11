import { Request, Response } from "express";
import Circunscripciones from "../models/circunscripciones";

//crear circunscripcion
export const crearCircunscripcion = async (req: Request, res: Response) => {
  try {
    const circunscripcion = await Circunscripciones.create(req.body);
    res.status(201).json(circunscripcion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear circunscripcion" });
  }
};

//encontrar circunscripciones
export const getCircunscripcion = async (req: Request, res: Response) => {
  try {
    const circunscripcion = await Circunscripciones.findAll();
    res.status(200).json(circunscripcion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener circunscripciones" });
  }
};

//encontrar por ID
export const getCircunscripcionId = async (req: Request, res: Response) => {
  try {
    const circunscripcionId = await Circunscripciones.findByPk(req.params.id);
    res.status(circunscripcionId ? 200 : 400).json(
      getCircunscripcionId || {
        message: "No se encuentra el id de la circunscripcion",
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "nose" });
  }
};

//soft delete
export const activCircunscripcion = async(req:Request, res:Response) => {
    try {
        
        
    } catch (error) {
        
    }
}
