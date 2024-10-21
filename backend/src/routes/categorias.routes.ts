import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateCategorias = [
  body("descripcion")
    .optional()
    .isString()
    .withMessage("La descripción debe ser una cadena de texto")
    .isLength({ max: 100 })
    .withMessage("La descripción no puede exceder 100 caracteres"),
  body("cod_categoria")
    .optional()
    .isInt()
    .withMessage("El código de categoría debe ser un número entero"),
  body("descripcion_tipo_categoria")
    .optional()
    .isString()
    .withMessage(
      "La descripción del tipo de categoría debe ser una cadena de texto"
    )
    .isLength({ max: 100 })
    .withMessage(
      "La descripción del tipo de categoría no puede exceder 100 caracteres"
    ),
  body("id_leu")
    .optional()
    .isInt()
    .withMessage("El ID LEU debe ser un número entero"),
  body("estado")
    .optional()
    .isInt()
    .withMessage("El estado debe ser un número entero"),
  body("usuario_abm")
    .optional()
    .isString()
    .withMessage("El usuario ABM debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("El usuario ABM no puede exceder 50 caracteres"),
  body("listar_reporte")
    .optional()
    .isInt()
    .withMessage("Listar reporte debe ser un número entero"),
  body("presentismo")
    .optional()
    .isInt()
    .withMessage("Presentismo debe ser un número entero"),
  body("pasajes")
    .optional()
    .isInt()
    .withMessage("Pasajes debe ser un número entero"),

  // Middleware para manejar los errores de validación
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
