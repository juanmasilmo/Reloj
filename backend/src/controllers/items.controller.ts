import { Request, Response } from "express";
import Items from "../models/items.models";
import Opciones from "../models/opciones.models";

// Crear un Item
export const crearItem = async (req: Request, res: Response) => {
  try {
    const item = await Items.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el ítem" });
  }
};

// Obtener todos los Items
export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Items.findAll({
      include: [{ model: Opciones, as: "opcion" }],
    });
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los ítems" });
  }
};

// Obtener un Item por ID
export const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await Items.findByPk(req.params.id, {
      include: [{ model: Opciones, as: "opcion" }],
    });
    res
      .status(item ? 200 : 404)
      .json(item || { message: "Item no encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el ítem" });
  }
};

// Actualizar un Item
export const actualizarItem = async (req: Request, res: Response) => {
  try {
    const item = await Items.findByPk(req.params.id);
    if (item) {
      await item.update(req.body);
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el ítem" });
  }
};

// Eliminar un Item
export const eliminarItem = async (req: Request, res: Response) => {
  try {
    const itemEliminado = await Items.destroy({
      where: { id: req.params.id },
    });
    if (itemEliminado) {
      res.status(204).json({ message: "Item eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Item no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el ítem" });
  }
};
