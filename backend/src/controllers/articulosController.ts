import { Request, Response } from "express";
import Articulos from "../models/articulos";

//crear artirculo
export const crearArticulo = async (req: Request, res: Response) => {
  try {
    const articulo = await Articulos.create(req.body);
    res.status(201).json(articulo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al drear articulo" });
  }
};

//encontrar todos los articulos
export const getArticulos = async (req: Request, res: Response) => {
  try {
    const articulos = await Articulos.findAll();
    res.status(200).json(articulos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener articulos" });
  }
};

//encontrar articulo por id
export const getIdArticulos = async (req: Request, res: Response) => {
  try {
    const articuloId = await Articulos.findByPk(req.params.id);
    res
      .status(articuloId ? 200 : 404)
      .json(articuloId || { message: "No se encontró el artículo" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error al obtener el articulo",
    });
  }
};

//soft delete
export const activoArticulo = async (req: Request, res: Response) => {
  try {
    const articuloActivo = await Articulos.findByPk(req.params.id);
    if (articuloActivo) {
      await articuloActivo.update(req.body);
      res.status(200).json(articuloActivo);
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Error al actualizar el articulo" });
  }
};
//eliminar articulo
export const eliminarArticulo = async (req: Request, res: Response) => {
  try {
    const articuloEliminado = await Articulos.destroy({
      where: { id: req.params.id },
    });
    if (articuloEliminado) {
      res.status(204).json({ message: "Articulo eliminado con exito" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el articulo" });
  }
};
