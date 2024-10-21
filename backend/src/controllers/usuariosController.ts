import { Request, Response } from "express";
import Usuarios from "../models/usuarios";

// Crear un nuevo usuario
export const crearUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await Usuarios.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

// Obtener todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

// Obtener un usuario por ID
export const getUsuarioId = async (req: Request, res: Response) => {
  try {
    const usuario = await Usuarios.findByPk(req.params.id);
    res
      .status(usuario ? 200 : 404)
      .json(usuario || { message: "No se encuentra el usuario" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await Usuarios.findByPk(req.params.id);
    if (usuario) {
      await usuario.update(req.body);
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: "No se encuentra el usuario" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req: Request, res: Response) => {
  try {
    const result = await Usuarios.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "No se encuentra el usuario" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};
