import { Request, Response } from "express";
import UsuarioDependencias from "../models/usuario_dependencias";

// Crear una nueva relación entre usuario y dependencia
export const crearUsuarioDependencia = async (req: Request, res: Response) => {
  try {
    const usuarioDependencia = await UsuarioDependencias.create(req.body);
    res.status(201).json(usuarioDependencia);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al crear la relación usuario-dependencia" });
  }
};

// Obtener todas las relaciones entre usuarios y dependencias
export const getUsuarioDependencias = async (req: Request, res: Response) => {
  try {
    const relaciones = await UsuarioDependencias.findAll();
    res.status(200).json(relaciones);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las relaciones usuario-dependencia" });
  }
};

// Obtener una relación entre usuario y dependencia por ID
export const getUsuarioDependenciaId = async (req: Request, res: Response) => {
  try {
    const relacion = await UsuarioDependencias.findOne({
      where: {
        id_usuario: req.params.id_usuario,
        id_dependencia: req.params.id_dependencia,
      },
    });
    res
      .status(relacion ? 200 : 404)
      .json(
        relacion || {
          message: "No se encuentra la relación usuario-dependencia",
        }
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener la relación usuario-dependencia" });
  }
};

// Actualizar una relación entre usuario y dependencia
export const actualizarUsuarioDependencia = async (
  req: Request,
  res: Response
) => {
  try {
    const relacion = await UsuarioDependencias.findOne({
      where: {
        id_usuario: req.params.id_usuario,
        id_dependencia: req.params.id_dependencia,
      },
    });
    if (relacion) {
      await relacion.update(req.body);
      res.status(200).json(relacion);
    } else {
      res
        .status(404)
        .json({ message: "No se encuentra la relación usuario-dependencia" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al actualizar la relación usuario-dependencia" });
  }
};

// Eliminar una relación entre usuario y dependencia
export const eliminarUsuarioDependencia = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await UsuarioDependencias.destroy({
      where: {
        id_usuario: req.params.id_usuario,
        id_dependencia: req.params.id_dependencia,
      },
    });
    if (result) {
      res.status(204).send();
    } else {
      res
        .status(404)
        .json({ message: "No se encuentra la relación usuario-dependencia" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al eliminar la relación usuario-dependencia" });
  }
};
