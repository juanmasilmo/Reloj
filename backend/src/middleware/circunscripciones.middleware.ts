import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateCircunscripciones = [
  body("descripcion")
    .optional() // Puede ser opcional, dependiendo de tu lógica de negocio
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 100 })
    .withMessage("La descripción no puede exceder 100 caracteres"),
  body("codigo")
    .notEmpty()
    .withMessage("El código es obligatorio")
    .isInt()
    .withMessage("El código debe ser un número entero"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
