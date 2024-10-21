import { Request, Response } from "express";
import CalendarioAgente from "../models/calendario_agente.models";

//crear articulo
export const crear_CalendarioAgente = async (req: Request, res: Response) => {
  try {
    const calendarioAgente = await CalendarioAgente.create(req.body);
    res.status(201).json(calendarioAgente);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear calendario agente" });
  }
};

//encontrar todos los calendario agente
export const getCalendarioAgente = async (req: Request, res: Response) => {
  try {
    const calendarioAgente = await CalendarioAgente.findAll();
    res.status(200).json(calendarioAgente);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener calendario agente" });
  }
};

//encontrar por id
export const getIdCalendarioAgente = async (req: Request, res: Response) => {
  try {
    const calendarioAgenteId = await CalendarioAgente.findByPk(req.params.id);
    res.status(calendarioAgenteId ? 200 : 400).json(
      calendarioAgenteId || {
        message: "No se encuentra el id del calendario agente"
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el art" });
  }
};

// soft delete
export const activoCalendarioAgente = async (req: Request, res: Response) => {
  try {
    const calenAgenActiv = await CalendarioAgente.findByPk(req.params.id);
    if (calenAgenActiv) {
      await calenAgenActiv.update(req.body);
      res.status(200).json(calenAgenActiv);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error al actualizar calendario agente" });
  }
};

//eliminar calendario agente
export const eliminar_CalenAgen = async (req: Request, res: Response) => {
  try {
    const eliminarCalenAgen = await CalendarioAgente.destroy({
      where: { id: req.params.id }
    });
    if (eliminarCalenAgen) {
      res.status(204).json({ message: "Calendario agente eliminado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar registro" });
  }
};
