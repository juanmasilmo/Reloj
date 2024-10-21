import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateGruposOpciones = [
  body("id_grupo")
    .isInt()
    .withMessage("El id_grupo debe ser un número entero")
    .notEmpty()
    .withMessage("El id_grupo es obligatorio"),

  body("id_opcion")
    .isInt()
    .withMessage("El id_opcion debe ser un número entero")
    .notEmpty()
    .withMessage("El id_opcion es obligatorio"),

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
