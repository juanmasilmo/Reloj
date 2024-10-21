import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateGrupos = [
  body("descripcion")
    .optional()
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 100 })
    .withMessage("La descripción no puede exceder 100 caracteres"),

  body("estado")
    .optional()
    .isInt()
    .withMessage("El estado debe ser un número entero"),

  body("usuario_abm")
    .optional()
    .isString()
    .withMessage("El usuario_abm debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("El usuario_abm no puede exceder 50 caracteres"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
