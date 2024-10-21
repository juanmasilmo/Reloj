import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateUsuarios = [
  body("usuario")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El usuario debe ser una cadena de texto")
    .isLength({ max: 100 })
    .withMessage("El usuario no puede exceder 100 caracteres"),

  body("nombre_apellido")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El nombre y apellido deben ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El nombre y apellido no pueden exceder 255 caracteres"),

  body("clave")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("La clave debe ser una cadena de texto")
    .isLength({ min: 6 })
    .withMessage("La clave debe tener al menos 6 caracteres"),

  body("estado")
    .optional() // Puede ser opcional
    .isInt({ min: 0, max: 1 })
    .withMessage("El estado debe ser 0 (inactivo) o 1 (activo)"),

  body("id_grupo")
    .optional() // Puede ser opcional
    .isInt({ gt: 0 })
    .withMessage(
      "El ID del grupo, si se proporciona, debe ser un número entero positivo"
    ),

  body("activo")
    .optional() // Puede ser opcional
    .isInt({ min: 0, max: 1 })
    .withMessage("El activo debe ser 0 (inactivo) o 1 (activo)"),

  body("carga_registro")
    .exists()
    .withMessage("La carga_registro es requerida")
    .isInt({ min: 0, max: 1 })
    .withMessage(
      "La carga_registro debe ser 0 (solo artículos) o 1 (carga registros + artículos)"
    ),

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
