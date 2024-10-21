import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateDependencias = [
  body("descripcion")
    .optional() // Puede ser opcional, dependiendo de tu lógica de negocio
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("La descripción no puede exceder 255 caracteres"),

  body("id_localidad")
    .optional()
    .isInt()
    .withMessage("El id_localidad debe ser un número entero"),

  body("estado")
    .optional()
    .isInt()
    .withMessage("El estado debe ser un número entero"),

  body("padre")
    .optional()
    .isInt()
    .withMessage("El padre debe ser un número entero"),

  body("usuario_abm")
    .optional()
    .isString()
    .withMessage("El usuario_abm debe ser una cadena de texto")
    .isLength({ max: 100 })
    .withMessage("El usuario_abm no puede exceder 100 caracteres"),

  body("id_leu")
    .optional()
    .isInt()
    .withMessage("El id_leu debe ser un número entero"),

  body("direccion")
    .optional()
    .isString()
    .withMessage("La dirección debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("La dirección no puede exceder 255 caracteres"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
