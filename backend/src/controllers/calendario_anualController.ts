import { Request, Response } from "express";
import CalendarioAnual from "../models/calendario_anual";

//crear art
export const crearCalendarioAnual = async (req: Request, res: Response) => {
  try {
    const calenAgenAnual = await CalendarioAnual.create(req.body);
    res.status(201).json(calenAgenAnual);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear calendario anual" });
  }
};

// encontrar todos
export const getCalenAnual = async (req: Request, res: Response) => {
  try {
    const calendarioAnual = await CalendarioAnual.findAll();
    res.status(200).json(calendarioAnual);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener calendario anual" });
  }
};

//encontrar por id
export const getIdCalenAnual = async (req: Request, res: Response) => {
  try {
    const calenAnualId = await CalendarioAnual.findByPk(req.params.id);
    res.status(calenAnualId ? 200 : 400).json(calenAnualId) || {
      message: "No se encuentra el id del calendario anual",
    };
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener calen anual" });
  }
};

//soft delete
export const activoCalenAnual = async (req: Request, res: Response) => {
  try {
    const calenAnualActiv = await CalendarioAnual.findByPk(req.params.id);
    if (calenAnualActiv) {
      await calenAnualActiv.update(req.body);
      res.status(200).json(calenAnualActiv);
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Error al actualizar calendario anual" });
  }
};

//eliminar registro calen anual
export const eliminar_CalenAnual = async (req: Request, res: Response) => {
  try {
    const eliminarCalenAnual = await CalendarioAnual.destroy({
      where: { id: req.params.id }
    });
    if(eliminarCalenAnual){
        res.status(204).json({message: "Registro eliminado con exito"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar calendario anual" });
  }
};
