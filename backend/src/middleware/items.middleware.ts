import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateItems = [
  body("descripcion")
    .optional()
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("La descripción debe tener un máximo de 255 caracteres"),

  body("enlace")
    .optional()
    .isURL()
    .withMessage("El enlace debe ser una URL válida"),

  body("id_opcion")
    .optional()
    .isInt()
    .withMessage("El id_opcion debe ser un número entero"),

  body("orden")
    .optional()
    .isInt()
    .withMessage("El orden debe ser un número entero"),

  body("estado")
    .optional()
    .isInt()
    .withMessage("El estado debe ser un número entero"),

  body("usuario_abm")
    .optional()
    .isString()
    .withMessage("El usuario_abm debe ser una cadena de texto"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
