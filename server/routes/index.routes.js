import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

// router.get('/ping', obtenertTareas)
router.get('/ping', async (req, res) => {
   const [result] = await pool.query('SELECT 2 + 3 * 4')
   res.json(result[0])
});

export default router;