import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateArticulos = [
  // Validaciones para los campos requeridos
  body("nro_articulo")
    .notEmpty()
    .withMessage("nro_articulo es obligatorio")
    .isString()
    .withMessage("nro_articulo debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("nro_articulo no puede exceder 50 caracteres"),
  body("descripcion")
    .notEmpty()
    .withMessage("descripcion es obligatoria")
    .isString()
    .withMessage("descripcion debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("descripcion no puede exceder 255 caracteres"),
  body("cantidad_mensual")
    .optional()
    .isInt()
    .withMessage("cantidad_mensual debe ser un número entero"),
  body("cantidad_anual")
    .optional()
    .isInt()
    .withMessage("cantidad_anual debe ser un número entero"),
  body("observacion")
    .optional()
    .isString()
    .withMessage("observacion debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("observacion no puede exceder 255 caracteres"),
  body("tipo_licencias")
    .optional()
    .isString()
    .withMessage("tipo_licencias debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("tipo_licencias no puede exceder 50 caracteres"),
  body("usuario_abm")
    .optional()
    .isString()
    .withMessage("usuario_abm debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("usuario_abm no puede exceder 255 caracteres"),
  body("color")
    .optional()
    .isString()
    .withMessage("color debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("color no puede exceder 50 caracteres"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
