// models/vehiculoModel.js
import { pool } from '../config/db.js';
export async function getAllVehiculos() {
  const res = await pool.query('SELECT * FROM Vehiculo ORDER BY vehiculo_id');
  return res.rows;
}
export async function getVehiculoById(id) {
  const res = await pool.query('SELECT * FROM Vehiculo WHERE vehiculo_id=$1', [id]);
  return res.rows[0];
}
export async function createVehiculo(data) {
  const { tipo, placa, marca, modelo, cliente_id } = data;
  const res = await pool.query(
    `INSERT INTO Vehiculo (tipo,placa,marca,modelo,cliente_id)
     VALUES($1,$2,$3,$4,$5) RETURNING *`,
    [tipo, placa, marca, modelo, cliente_id]
  );
  return res.rows[0];
}
export async function updateVehiculo(id, data) {
  const { tipo, placa, marca, modelo } = data;
  const res = await pool.query(
    `UPDATE Vehiculo SET tipo=$1,placa=$2,marca=$3,modelo=$4
     WHERE vehiculo_id=$5 RETURNING *`,
    [tipo, placa, marca, modelo, id]
  );
  return res.rows[0];
}
export async function deleteVehiculo(id) {
  await pool.query('DELETE FROM Vehiculo WHERE vehiculo_id=$1', [id]);
}
