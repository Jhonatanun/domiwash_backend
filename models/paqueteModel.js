// models/paqueteModel.js
import { pool } from '../config/db.js';
export async function getAllPaquetes() {
  const res = await pool.query('SELECT * FROM PaqueteServicio ORDER BY paquete_id');
  return res.rows;
}
export async function getPaqueteById(id) {
  const res = await pool.query('SELECT * FROM PaqueteServicio WHERE paquete_id=$1', [id]);
  return res.rows[0];
}
export async function createPaquete(data) {
  const { nombre, descripcion, precio } = data;
  const res = await pool.query(
    `INSERT INTO PaqueteServicio (nombre,descripcion,precio)
     VALUES($1,$2,$3) RETURNING *`,
    [nombre, descripcion, precio]
  );
  return res.rows[0];
}
export async function updatePaquete(id, data) {
  const { nombre, descripcion, precio } = data;
  const res = await pool.query(
    `UPDATE PaqueteServicio SET nombre=$1,descripcion=$2,precio=$3
     WHERE paquete_id=$4 RETURNING *`,
    [nombre, descripcion, precio, id]
  );
  return res.rows[0];
}
export async function deletePaquete(id) {
  await pool.query('DELETE FROM PaqueteServicio WHERE paquete_id=$1', [id]);
}
