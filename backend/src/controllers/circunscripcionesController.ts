import { Request, Response } from "express";
import Circunscripciones from "../models/circunscripciones";

//crear circunscripcion
export const crearCircunscripcion = async (req: Request, res: Response) => {
  try {
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
