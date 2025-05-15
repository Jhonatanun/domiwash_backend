// models/lavadorModel.js
import { pool } from '../config/db.js';
export async function getAllLavadores() {
  const res = await pool.query('SELECT * FROM Lavador ORDER BY washer_id');
  return res.rows;
}
export async function getLavadorById(id) {
  const res = await pool.query('SELECT * FROM Lavador WHERE washer_id=$1', [id]);
  return res.rows[0];
}
export async function createLavador(data) {
  const { nombre, telefono, disponibilidad } = data;
  const res = await pool.query(
    `INSERT INTO Lavador (nombre,telefono,disponibilidad)
     VALUES($1,$2,$3) RETURNING *`,
    [nombre, telefono, disponibilidad]
  );
  return res.rows[0];
}
export async function updateLavador(id, data) {
  const { nombre, telefono, disponibilidad } = data;
  const res = await pool.query(
    `UPDATE Lavador SET nombre=$1,telefono=$2,disponibilidad=$3
     WHERE washer_id=$4 RETURNING *`,
    [nombre, telefono, disponibilidad, id]
  );
  return res.rows[0];
}
export async function deleteLavador(id) {
  await pool.query('DELETE FROM Lavador WHERE washer_id=$1', [id]);
}
