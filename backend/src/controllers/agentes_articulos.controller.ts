import { Request, Response } from "express";
import AgenteArticulo from "../models/agentes_articulos.models";

//crear articuloAgente
export const createAgenteArticulo = async (req: Request, res: Response) => {
  try {
    const agenteArticulo = await AgenteArticulo.create(req.body);
    res.status(201).json(agenteArticulo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el agente articulo" });
  }
};
//encontrar todos los articuloAgente
export const getAgentesArticulos = async (req: Request, res: Response) => {
  try {
    const agentesArticulos = await AgenteArticulo.findAll();
    res.status(200).json(agentesArticulos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los agentes articulos" });
  }
};
//encontrar por id articuloAgente
export const getIdAgentesArticulos = async (req: Request, res: Response) => {
  try {
    const agenteArticulobyID = await AgenteArticulo.findByPk(req.params.id);
    if (agenteArticulobyID) {
      res.status(200).json(agenteArticulobyID);
    } else {
      res.status(404).json({ message: "No se encontro el agente articulo" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al obtener el agente articulo por" });
  }
};

// soft delete
export const softDeleteAgenteArticulo = async (req: Request, res: Response) => {
  try {
    const agenteArticulo = await AgenteArticulo.findByPk(req.params.id);
    if (agenteArticulo) {
      await agenteArticulo.update({ estado: "eliminado" }); // Marca como eliminado
      res
        .status(200)
        .json({ message: "Agente artículo marcado como eliminado" });
    } else {
      res.status(404).json({ message: "No se encontró el agente artículo" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al marcar el agente artículo como eliminado" });
  }
};
//eliminar
export const eliminarAgenteArticulo = async (req: Request, res: Response) => {
  try {
    const agenteArticuloEliminar = await AgenteArticulo.destroy({
      where: { id: req.params.id },
    });
    if (agenteArticuloEliminar) {
      res.status(204).send({ message: "Agente articulo eliminado con exito" });
    } else {
      res.status(404).json({ message: "No se encontro el agente articulo" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
