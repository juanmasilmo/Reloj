import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateCalendarioAnual = [
  body("id_estado")
    .optional()
    .isInt()
    .withMessage("id_estado debe ser un número entero"),
  body("fecha_inicio")
    .optional()
    .isISO8601()
    .withMessage("fecha_inicio debe ser una fecha válida"),
  body("fecha_fin")
    .optional()
    .isISO8601()
    .withMessage("fecha_fin debe ser una fecha válida"),
  body("usuario_abm")
    .optional()
    .isString()
    .withMessage("usuario_abm debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("usuario_abm no puede exceder 50 caracteres"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
