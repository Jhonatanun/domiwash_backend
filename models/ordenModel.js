// models/ordenModel.js
import { pool } from '../db.js';
export async function getAllOrdenes() {
  const res = await pool.query('SELECT * FROM Orden ORDER BY orden_id');
  return res.rows;
}
export async function getOrdenById(id) {
  const res = await pool.query('SELECT * FROM Orden WHERE orden_id=$1', [id]);
  return res.rows[0];
}
export async function createOrden(data) {
  const { cliente_id, paquete_id, washer_id, fecha_hora, direccion, estado } = data;
  const res = await pool.query(
    `INSERT INTO Orden (cliente_id,paquete_id,washer_id,fecha_hora,direccion,estado)
     VALUES($1,$2,$3,$4,$5,COALESCE($6,'pendiente')) RETURNING *`,
    [cliente_id, paquete_id, washer_id, fecha_hora, direccion, estado]
  );
  return res.rows[0];
}
export async function updateOrden(id, data) {
  const { washer_id, fecha_hora, direccion, estado } = data;
  const res = await pool.query(
    `UPDATE Orden SET washer_id=$1,fecha_hora=$2,direccion=$3,estado=$4
     WHERE orden_id=$5 RETURNING *`,
    [washer_id, fecha_hora, direccion, estado, id]
  );
  return res.rows[0];
}
export async function deleteOrden(id) {
  await pool.query('DELETE FROM Orden WHERE orden_id=$1', [id]);
}
