import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validatePersonas = [
  body("apellido")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El apellido debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El apellido no puede exceder 255 caracteres"),

  body("nombres")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El nombre debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El nombre no puede exceder 255 caracteres"),

  body("legajo")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El legajo debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("El legajo no puede exceder 50 caracteres"),

  body("correo")
    .optional() // Puede ser opcional
    .isEmail()
    .withMessage("El correo debe ser un correo electrónico válido"),

  body("activo")
    .optional() // Puede ser opcional
    .isInt({ min: 0, max: 1 })
    .withMessage("El activo debe ser un número entero (0 o 1)"),

  body("id_dependencia")
    .optional() // Puede ser opcional
    .isInt()
    .withMessage("La dependencia debe ser un número entero"),

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

  body("id_leu")
    .optional() // Puede ser opcional
    .isInt()
    .withMessage("El id_leu debe ser un número entero"),

  body("nro_documento")
    .optional() // Puede ser opcional
    .isInt()
    .withMessage("El número de documento debe ser un número entero"),

  body("fecha_nacimiento")
    .optional() // Puede ser opcional
    .isDate()
    .withMessage("La fecha de nacimiento debe ser una fecha válida"),

  body("domicilio")
    .optional() // Puede ser opcional
    .isString()
    .withMessage("El domicilio debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("El domicilio no puede exceder 255 caracteres"),

  body("id_categoria")
    .optional() // Puede ser opcional
    .isInt()
    .withMessage("La categoría debe ser un número entero"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
