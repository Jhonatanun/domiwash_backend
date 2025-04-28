// models/pagoModel.js
import { pool } from '../db.js';
export async function getAllPagos() {
  const res = await pool.query('SELECT * FROM Pago ORDER BY pago_id');
  return res.rows;
}
export async function getPagoById(id) {
  const res = await pool.query('SELECT * FROM Pago WHERE pago_id=$1', [id]);
  return res.rows[0];
}
export async function createPago(data) {
  const { orden_id, monto, metodo, estado, txn_id, pagado_at } = data;
  const res = await pool.query(
    `INSERT INTO Pago (orden_id,monto,metodo,estado,txn_id,pagado_at)
     VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
    [orden_id, monto, metodo, estado, txn_id, pagado_at]
  );
  return res.rows[0];
}
export async function updatePago(id, data) {
  const { estado, txn_id, pagado_at } = data;
  const res = await pool.query(
    `UPDATE Pago SET estado=$1,txn_id=$2,pagado_at=$3
     WHERE pago_id=$4 RETURNING *`,
    [estado, txn_id, pagado_at, id]
  );
  return res.rows[0];
}
export async function deletePago(id) {
  await pool.query('DELETE FROM Pago WHERE pago_id=$1', [id]);
}
