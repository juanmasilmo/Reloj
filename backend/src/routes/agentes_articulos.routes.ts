import { Router } from "express";
import {
  createAgenteArticulo,
  getAgentesArticulos,
  getAgenteArticuloById,
  updateAgenteArticulo,
  deleteAgenteArticulo,
} from "../controllers/agenteArticuloController";
import { validateAgenteArticulo } from "../middleware/validateAgenteArticulo"; // Ajusta la ruta según tu estructura

const router = Router();

// Crear un nuevo agente-artículo
router.post("/", validateAgenteArticulo, createAgenteArticulo);

// Obtener todos los agentes-artículos
router.get("/", getAgentesArticulos);

// Obtener un agente-artículo por ID
router.get("/:id", validateAgenteArticulo, getAgenteArticuloById);

// Actualizar un agente-artículo por ID
router.put("/:id", validateAgenteArticulo, updateAgenteArticulo);

// Eliminar un agente-artículo por ID
router.delete("/:id", validateAgenteArticulo, deleteAgenteArticulo);

export default router;
