import { pool } from "../db.js"

//? GET Obtener todas las tareas - todas las tareas
export const obtenertTareas = async (req, res) =>{
   const [rows] = await pool.query('SELECT * FROM empleados')
   res.json(rows)
}

//? GET Obtener una tarea solicitandolo con el ID - obtener con el ID http://localhost:4000/api/tareas/2
export const obtenertTarea = async (req, res) => {
   const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id])

   if (rows.length == 0) return res.status(404).json({
      message: 'Tarea no encontrada'
   })

   res.json(rows)
}

//? POST Insertar una tarea
export const crearTarea = async (req, res) => {
   const {nombre, salario} = req.body
   const [rows] = await pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario])
   console.log(req.body)
   res.send({  //? Devuelve el resultado de lo insertado
      id: rows.insertId,
      nombre,
      salario
   })
}
// Asi debe enviarse la info para insertar en el backend - json
// {
//    "nombre": "Juanacha",
//    "salario": 12000
// }

//? PUT Actualizar una tarea solicitado con el ID - actualizar con el ID http://localhost:4000/api/tareas/5
export const actualizarTarea = async (req, res) => {
   const {id} = req.params
   const {nombre, salario} = req.body
   console.log(id, nombre, salario)

   const [result] = await pool.query('UPDATE empleados SET nombre = IFNULL(?,nombre), salario = IFNULL(?,salario) WHERE id = ?', [nombre, salario, id])   //? IFNULL pregunta si es nulo cambia con ?

   // console.log(result)

   if (result.affectedRows == 0) return res.status(404).json({
      message: 'Tarea no encontro resultado'
   })
   // Asi debe enviarse la info para actualizar en el backend - json
   // {
   //    "nombre": "pequeño",
   //    "salario": 102
   // }

   const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id])

   // res.json('actulalizado')
   res.json(rows[0])
}

//? PUT Eliminar una tarea solicitado con el ID - eliminar con el ID http://localhost:4000/api/tareas/7
export const eliminarTarea = async (req, res) => {
   const [result] = await pool.query('DELETE FROM empleados WHERE id = ?', [req.params.id])

   if (result.affectedRows == 0) return res.status(404).json({ //? Error - No encontrado
      message: 'Tarea no encontrada'
   })

   res.sendStatus(204)  //? Operacion exitosa sin resultado
}