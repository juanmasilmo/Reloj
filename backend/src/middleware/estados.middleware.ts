import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateEstados = [
  body("descripcion")
    .optional() // Puede ser opcional, dependiendo de tu lógica de negocio
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("La descripción no puede exceder 255 caracteres"),

  body("letra")
    .optional()
    .isString()
    .withMessage("La letra debe ser una cadena de texto")
    .isLength({ max: 10 })
    .withMessage("La letra no puede exceder 10 caracteres"),

  body("color")
    .optional()
    .isString()
    .withMessage("El color debe ser una cadena de texto")
    .isLength({ max: 7 })
    .withMessage("El color no puede exceder 7 caracteres")
    .matches(/^#[0-9A-Fa-f]{6}$/)
    .withMessage(
      "El color debe ser un código hexadecimal válido (ej. #FFFFFF)"
    ),

  body("usuario_abm")
    .optional()
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
