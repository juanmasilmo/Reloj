import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateUsuarioDependencias = [
  body("id_usuario")
    .exists()
    .withMessage("El ID del usuario es requerido")
    .isInt({ gt: 0 })
    .withMessage("El ID del usuario debe ser un número entero positivo"),

  body("id_dependencia")
    .exists()
    .withMessage("El ID de la dependencia es requerido")
    .isInt({ gt: 0 })
    .withMessage("El ID de la dependencia debe ser un número entero positivo"),

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
