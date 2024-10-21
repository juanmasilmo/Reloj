import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateLocalidades = [
  body("descripcion")
    .optional() // Puede ser opcional, dependiendo de tu lógica de negocio
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("La descripción no puede exceder 255 caracteres"),

  body("usuario_abm")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El usuario_abm debe ser una cadena de texto")
    .isLength({ max: 100 })
    .withMessage("El usuario_abm no puede exceder 100 caracteres"),

  body("id_circunscripcion")
    .optional() // Puede ser opcional
    .isInt({ min: 1 })
    .withMessage("El id_circunscripcion debe ser un número entero positivo"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
