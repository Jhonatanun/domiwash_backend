// server.js
import express from 'express';
import dotenv from 'dotenv';
import clienteRoutes from './routes/cliente.js';
import vehiculoRoutes from './routes/vehiculo.js';
import paqueteRoutes from './routes/paquete.js';
import lavadorRoutes from './routes/lavador.js';
import ordenRoutes from './routes/orden.js';
import pagoRoutes from './routes/pago.js';


dotenv.config();
const app = express();
app.use(express.json());

// Monta rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/vehiculos', vehiculoRoutes);
app.use('/api/paquetes', paqueteRoutes);
app.use('/api/lavadores', lavadorRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/pagos', pagoRoutes);


// Middleware de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`))

// hajdshfkjasdlkjfhakjhdflkahkjlsdhflad
