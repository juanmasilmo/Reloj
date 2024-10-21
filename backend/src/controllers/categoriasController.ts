import { Request, Response } from "express";
import Categorias from "../models/categorias";

//crear Categoria
export const crearCategoria = async (req: Request, res: Response) => {
  try {
    const categoria = await Categorias.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear categoria" });
  }
};

//encontrar todas las categorias
export const getCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await Categorias.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Error al obtener las categorias" });
  }
};

//encontrar categ por ID
export const getCategId = async (req: Request, res: Response) => {
  try {
    const categId = await Categorias.findByPk(req.params.id);
    res.status(categId ? 200 : 400).json(
      getCategId || {
        Message: "No se encuentra el id de la categoria"
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({Message: ""})
  }
};
