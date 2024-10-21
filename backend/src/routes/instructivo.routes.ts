import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateInstructivo = [
  body("titulo")
    .isString()
    .withMessage("El título debe ser una cadena de texto")
    .isLength({ min: 1, max: 255 })
    .withMessage("El título debe tener entre 1 y 255 caracteres"),

  body("descripcion")
    .optional()
    .isString()
    .withMessage("La descripción debe ser una cadena de texto"),

  body("url_video")
    .optional()
    .isURL()
    .withMessage("La URL del video debe ser una URL válida"),

  body("url_documento")
    .optional()
    .isURL()
    .withMessage("La URL del documento debe ser una URL válida"),

  body("id_categoria")
    .optional()
    .isInt()
    .withMessage("El id_categoria debe ser un número entero"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
