import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateAgenteArticulo = [
  // Validaciones para los campos requeridos
  body("id_licencia")
    .optional()
    .isInt()
    .withMessage("id_licencia debe ser un número entero"),
  body("id_agente_leu")
    .optional()
    .isInt()
    .withMessage("id_agente_leu debe ser un número entero"),
  body("fecha_desde")
    .optional()
    .isISO8601()
    .withMessage("fecha_desde debe ser una fecha válida (ISO 8601)"),
  body("fecha_hasta")
    .optional()
    .isISO8601()
    .withMessage("fecha_hasta debe ser una fecha válida (ISO 8601)"),
  body("id_articulo_leu")
    .optional()
    .isInt()
    .withMessage("id_articulo_leu debe ser un número entero"),
  body("estado")
    .optional()
    .isString()
    .withMessage("estado debe ser una cadena de texto"),
  body("cant_dias")
    .optional()
    .isInt()
    .withMessage("cant_dias debe ser un número entero"),
  body("fecha_abm")
    .optional()
    .isISO8601()
    .withMessage("fecha_abm debe ser una fecha válida (ISO 8601)"),
  body("usuario_abm")
    .optional()
    .isString()
    .withMessage("usuario_abm debe ser una cadena de texto"),
  body("id_articulo_reloj")
    .optional()
    .isInt()
    .withMessage("id_articulo_reloj debe ser un número entero"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
