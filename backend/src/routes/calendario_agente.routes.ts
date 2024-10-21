import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateCalendarioAgente = [
  body("legajo")
    .optional()
    .isInt()
    .withMessage("legajo debe ser un número entero"),
  body("registro")
    .optional()
    .isISO8601()
    .withMessage("registro debe ser una fecha válida"),
  body("registro_modificado")
    .optional()
    .isISO8601()
    .withMessage("registro_modificado debe ser una fecha válida"),
  body("borrado")
    .optional()
    .isInt({ min: 0, max: 1 })
    .withMessage("borrado debe ser 0 o 1"), // Considerando que es un indicador de borrado
  body("fecha_abm")
    .optional()
    .isISO8601()
    .withMessage("fecha_abm debe ser una fecha válida"),
  body("usuario_abm")
    .optional()
    .isString()
    .withMessage("usuario_abm debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("usuario_abm no puede exceder 50 caracteres"),
  body("leu").optional().isInt().withMessage("leu debe ser un número entero"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
