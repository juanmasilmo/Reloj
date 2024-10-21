import { Request, Response } from "express";
import Circunscripciones from "../models/circunscripciones.models";

//crear circunscripcion
export const crearCircunscripcion = async (req: Request, res: Response) => {
  try {
<<<<<<< HEAD
    const circuns = await Circunscripciones.create(req.body);
    res.status(201).json(circuns);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear categoria" });
  }
};

//Encontrar todas las categorias
export const getCircunscripciones = async (req: Request, res: Response) => {
  try {
    const circuns = await Circunscripciones.findAll();
    res.status(200).json(circuns);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Error al obtener las categorias" });
  }
};

//encontrar cirunscripcion por id

export const getCircunsId = async (req: Request, res: Response) => {
  try {
    const circunsId = await Circunscripciones.findByPk(req.params.id);
    res
      .status(circunsId ? 200 : 400)
      .json(
        getCircunsId || { Message: "No se encuentra el id de la categoria" }
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({})
  }
};
=======
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
>>>>>>> 18d68b7d4a50e1ffa70775251feebf0d8a1cf546
