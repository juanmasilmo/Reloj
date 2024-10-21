import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateOpciones = [
  body("titulo")
    .optional() // Puede ser opcional, dependiendo de tu lógica de negocio
    .isString()
    .withMessage("El título debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El título no puede exceder 255 caracteres"),

  body("descripcion")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("La descripción no puede exceder 255 caracteres"),

  body("icono")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El icono debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El icono no puede exceder 255 caracteres"),

  body("orden")
    .optional() // Puede ser opcional
    .isInt({ min: 1 })
    .withMessage("El orden debe ser un número entero positivo"),

  body("estado")
    .optional() // Puede ser opcional
    .isInt({ min: 0, max: 1 })
    .withMessage("El estado debe ser un número entero (0 o 1)"),

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
