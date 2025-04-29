// models/clienteModel.js
import { pool } from '../config/db.js';
export async function getAllClientes() {
  const res = await pool.query('SELECT * FROM Cliente ORDER BY cliente_id');
  return res.rows;
}
export async function getClienteById(id) {
  const res = await pool.query('SELECT * FROM Cliente WHERE cliente_id=$1', [id]);
  return res.rows[0];
}
export async function createCliente(data) {
  const { nombre, email, telefono, direccion } = data;
  const res = await pool.query(
    `INSERT INTO Cliente (nombre,email,telefono,direccion)
     VALUES ($1,$2,$3,$4) RETURNING *`,
    [nombre, email, telefono, direccion]
  );
  return res.rows[0];
}
export async function updateCliente(id, data) {
  const { nombre, email, telefono, direccion } = data;
  const res = await pool.query(
    `UPDATE Cliente SET nombre=$1,email=$2,telefono=$3,direccion=$4
     WHERE cliente_id=$5 RETURNING *`,
    [nombre, email, telefono, direccion, id]
  );
  return res.rows[0];
}
export async function deleteCliente(id) {
  await pool.query('DELETE FROM Cliente WHERE cliente_id=$1', [id]);
}
