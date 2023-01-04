import { Router } from "express";
import { obtenertTareas, obtenertTarea, crearTarea, actualizarTarea, eliminarTarea  } from "../controllers/tareas.controllers.js";
// import { pool } from "../db.js";

const router = Router();

router.get('/tareas', obtenertTareas)
router.get('/tarea/:id', obtenertTarea)

router.post('/tarea', crearTarea)

// router.put('/tarea/:id', actualizarTarea) //? COn PUT actualizas todos los campos
router.patch('/tarea/:id', actualizarTarea) //? Con PATCH actualizas campos independientes (un campo por ejemplo)

router.delete('/tarea/:id', eliminarTarea)


export default router;