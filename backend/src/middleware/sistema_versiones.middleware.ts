import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateSistemaVersiones = [
  body("tag")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El tag debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("El tag no puede exceder 50 caracteres"),

  body("descripcion")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("La descripción no puede exceder 255 caracteres"),

  body("fecha")
    .optional() // Puede ser opcional
    .isISO8601()
    .withMessage("La fecha debe ser una fecha válida en formato ISO 8601"),

  body("usuario_abm")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El usuario_abm debe ser una cadena de texto")
    .isLength({ max: 100 })
    .withMessage("El usuario_abm no puede exceder 100 caracteres"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
